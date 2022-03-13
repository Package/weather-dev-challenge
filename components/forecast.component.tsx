import React, { FC } from 'react'
import { Forecast } from '../types'

interface ForecastComponentProps {
	forecast: Array<Forecast>;
}

export const ForecastComponent: FC<ForecastComponentProps> = ({ forecast }) => {

	return (
		<div className="forecast-container">
			<h2>Forecast</h2>

			<div className="forecast-grid">
				{forecast.slice(1).map((forecast, index) => (
					<div className="forecast" key={index}>
						<h3>{forecast.weather_state_name}</h3>

						<img src={`/images/${forecast.weather_state_abbr}.svg`} alt={forecast.weather_state_name} />

						<div className="forecast--temperatures">
							<span>{forecast.max_temp.toFixed(0)}℃</span>
							<span className="text-secondary">{forecast.min_temp.toFixed(0)}℃</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
