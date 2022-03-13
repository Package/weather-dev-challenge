import { useEffect, useMemo, useState } from "react";
import { SAMPLE_WEATHER_RESULT } from "../static-data/sample-forecast";
import { WeatherResult } from "../types";

interface UseWeatherHook {
  result: WeatherResult;
  loading: boolean;
  fetchWeather: (placeId: number) => Promise<void>;
}

export function useWeather(): UseWeatherHook {
  const [result, setResult] = useState<WeatherResult>(SAMPLE_WEATHER_RESULT);
  const [loading, setLoading] = useState<boolean>(true);
  const LONDON_LOCATION = useMemo<number>(() => 44418, []);

  async function fetchWeather(placeId: number) {
    setLoading(true);

    const response = await fetch(`/api/weather?placeId=${placeId}`);
    const json = await response.json();

    setResult(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchWeather(LONDON_LOCATION);
  }, []);

  return {
    result,
    loading,
    fetchWeather
  };
}
