import React, { FC } from 'react'
import { Forecast } from '../types'
import { formatDate } from '../util/date';

interface ForecastComponentProps {
	forecast: Forecast[];
}

export const ForecastComponent: FC<ForecastComponentProps> = ({ forecast }) => {

	return (
		<div className="forecast-container">
			<h2>Forecast</h2>

			<div className="forecast-grid">
				{forecast.slice(1).map((forecast, index) => (
					<div className="forecast" key={forecast.id}>
						<h3 className="forecast--date">{formatDate(forecast.applicable_date, index)}</h3>

						<div className="forecast--description">
							<img src={`/images/${forecast.weather_state_abbr}.svg`} alt={forecast.weather_state_name} />
							<span>
								{forecast.weather_state_name}
							</span>
						</div>

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
