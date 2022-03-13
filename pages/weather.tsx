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
		</LayoutComponent>
	)
}

export default WeatherPage;