import React, { FC } from 'react'
import { Forecast } from '../types';
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

interface TodayComponentProps {
	forecast: Forecast;
	location: string;
}

const TodayComponent: FC<TodayComponentProps> = ({ forecast, location }) => {
	return (
		<div className="today-container">
			<div className="today-search">
				<button className="rounded">
					<FaSearch />
				</button>
				<button className="rounded">
					<FaMapMarkerAlt />
				</button>
			</div>

			<img className="today-image" src={`https://www.metaweather.com/static/img/weather/${forecast.weather_state_abbr}.svg`} alt={forecast.weather_state_name} />

			<div className="today-temperature">
				<div className="stat">
					<span className="number">
						{forecast.the_temp.toFixed(0)}
					</span>
					<span className="text-secondary">
						℃
					</span>
				</div>
			</div>

			<div className="today-description">
				{forecast.weather_state_name}
			</div>

			<div className="today-meta">
				<span>Today</span>
				<span>•</span>
				<span>{forecast.applicable_date}</span>
			</div>

			<div className="today-location">
				<FaMapMarkerAlt className="icon" />
				{location}
			</div>
		</div>
	)
}

export default TodayComponent;
