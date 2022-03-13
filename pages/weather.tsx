import Head from 'next/head';
import React, { useState } from 'react'
import { ForecastComponent } from '../components/forecast.component';
import HighlightComponent from '../components/highlight.component';
import { SearchComponent } from '../components/search.component';
import TodayComponent from '../components/today.component';
import { useWeather } from '../hooks/useWeather';

const WeatherPage = () => {
	const [searchOpen, setSearchOpen] = useState<boolean>(true);
	const { result, loading, fetchWeather } = useWeather();

	async function locationSelected(placeId: number) {
		await fetchWeather(placeId);
		setSearchOpen(false);
	}

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Head>
				<title>Weather - {result?.title}</title>
			</Head>

			<div className="page-container">
				<div className="left">
					{searchOpen &&
						<SearchComponent searchToggle={() => setSearchOpen(false)} locationSelected={locationSelected} />
					}
					{!searchOpen &&
						<TodayComponent forecast={result.consolidated_weather[0]} location={result.title} searchToggle={() => setSearchOpen(true)} />
					}
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