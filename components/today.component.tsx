import React, { FC } from "react";
import { Forecast } from "../types";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { formatDate } from "../util/date";

interface TodayComponentProps {
  forecast: Forecast;
  location: string;
  searchToggle: () => void;
}

export const TodayComponent: FC<TodayComponentProps> = ({
  forecast,
  location,
  searchToggle
}) => {
  return (
    <div className="today">
      <div className="today--search">
        <button className="rounded">
          <FaMapMarkerAlt />
        </button>
        <button className="rounded" onClick={searchToggle}>
          <FaSearch />
        </button>
      </div>

      <img
        className="today--image"
        src={`/images/${forecast.weather_state_abbr}.svg`}
        alt={forecast.weather_state_name}
      />

      <div className="today--temperature">
        <div className="today--stat">
          <span className="number">{forecast.the_temp.toFixed(0)}</span>
          <span className="text-secondary">℃</span>
        </div>
      </div>

      <div className="today--description">{forecast.weather_state_name}</div>

      <div className="today--meta">
        <span>Today</span>
        <span>•</span>
        <span>{formatDate(forecast.applicable_date)}</span>
      </div>

      <div className="today--location">
        <FaMapMarkerAlt className="icon" />
        {location}
      </div>
    </div>
  );
};
