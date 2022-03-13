import Head from 'next/head';
import React from 'react'
import { ForecastComponent } from '../components/forecast.component';
import HighlightComponent from '../components/highlight.component';
import TodayComponent from '../components/today.component';
import { useWeather } from '../hooks/useWeather';

const WeatherPage = () => {
	const { result, loading } = useWeather();

	if (loading || !result) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Head>
				<title>Weather - {result.title}</title>
			</Head>

			<div className="page-container">
				<div className="left">
					<TodayComponent forecast={result.consolidated_weather[0]} location={result.title} />
				</div>

				<div className="right">
					<ForecastComponent forecast={result.consolidated_weather} />

					<HighlightComponent forecast={result.consolidated_weather[0]} />

					<footer>
						<p>created by <a href="https://github.com/Package">Package</a> - devChallenges.io</p>
					</footer>
				</div>
			</div>
		</>
	)
}

export default WeatherPage;