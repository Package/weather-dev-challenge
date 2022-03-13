import { useEffect, useState } from "react";
import { SAMPLE_WEATHER_RESULT } from "../static-data/sample-forecast";
import { Forecast, WeatherResult } from "../types";

interface UseWeatherHook {
	result?: WeatherResult;
	loading: boolean;
}

export function useWeather(): UseWeatherHook {
	const [search, setSearch] = useState<string>("London");
	const [location, setLocation] = useState<number>(44418);
	const [result, setResult] = useState<WeatherResult>(SAMPLE_WEATHER_RESULT);
	const [loading, setLoading] = useState<boolean>(false);

	// useEffect(() => {
	// 	if (loading) {
	// 		return;
	// 	}

	// 	setLoading(true);

	// 	async function fetchWeather() {
	// 		const response = await fetch(`https://www.metaweather.com/api/location/${location}/`);
	// 		const data = await response.json();

	// 		setResult(data);
	// 		setLoading(false);
	// 	}

	// 	fetchWeather();
	// }, [location]);

	return {
		result,
		loading
	}
}