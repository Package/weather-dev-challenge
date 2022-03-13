import React, { useState } from 'react'
import { ForecastComponent } from '../components/forecast.component';
import { LayoutComponent } from '../components/layout.component';
import { SearchComponent } from '../components/search.component';
import { TodayComponent } from '../components/today.component';
import { HighlightComponent } from '../components/highlight.component';
import { useWeather } from '../hooks/useWeather';

const WeatherPage = () => {
	const [searchOpen, setSearchOpen] = useState<boolean>(true);
	const { result, loading, fetchWeather } = useWeather();

	async function locationSelected(placeId: number) {
		await fetchWeather(placeId);
		setSearchOpen(false);
	}

	return (
		<LayoutComponent title={result?.title} loading={loading}>
			<aside>
				{searchOpen &&
					<SearchComponent searchToggle={() => setSearchOpen(false)} locationSelected={locationSelected} />
				}
				{!searchOpen &&
					<TodayComponent searchToggle={() => setSearchOpen(true)} location={result.title} forecast={result.consolidated_weather[0]} />
				}
			</aside>

			<main>
				<ForecastComponent forecast={result.consolidated_weather} />

				<HighlightComponent forecast={result.consolidated_weather[0]} />

				<footer>
					<p>created by <a href="https://github.com/Package">Package</a> - devChallenges.io</p>
				</footer>
			</main>
		</LayoutComponent>
	)
}

export default WeatherPage;