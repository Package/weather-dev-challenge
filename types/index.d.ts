export interface WeatherResult {
	consolidated_weather: Forecast[];
	time: Date | string;
	sun_rise: Date | string;
	sun_set: Date | string;
	timezone_name: string;
	parent: Parent;
	sources: any[];
	title: string;
	location_type: string;
	woeid: number;
	latt_long: string;
	timezone: string;
}

export interface Forecast {
	id: number;
	weather_state_name: string;
	weather_state_abbr: string;
	wind_direction_compass: string;
	created: Date | string;
	applicable_date: Date | string;
	min_temp: number;
	max_temp: number;
	the_temp: number;
	wind_speed: number;
	wind_direction: number;
	air_pressure: number;
	humidity: number;
	visibility: number;
	predictability: number;
}

export interface SearchResult {
	title: string;
	location_type: string;
	woeid: number;
	latt_long: string;
}

export interface ApiError {
	status: number;
	message: string;
}
