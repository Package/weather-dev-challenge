import React, { FC } from 'react'
import { Forecast } from '../types';

interface HighlightComponentProps {
	forecast: Forecast
}

export const HighlightComponent: FC<HighlightComponentProps> = ({ forecast }) => {
	return (
		<div className="highlight-container">
			<h2>Today's Highlights</h2>

			<div className="highlight-grid">
				<div className="highlight">
					<h4>Wind Status</h4>
					<div className="stat">
						<span className="number">
							{forecast.wind_speed.toFixed(0)}
						</span> mph
					</div>
				</div>

				<div className="highlight">
					<h4>Humidity</h4>
					<div className="stat">
						<span className="number">
							{forecast.humidity.toFixed(0)}
						</span>%
					</div>
				</div>

				<div className="highlight">
					<h4>Visibility</h4>
					<div className="stat">
						<span className="number">
							{forecast.visibility.toFixed(1)}
						</span> miles
					</div>
				</div>

				<div className="highlight">
					<h4>Air Pressure</h4>
					<div className="stat">
						<span className="number">
							{forecast.air_pressure.toFixed(0)}
						</span> mb
					</div>
				</div>
			</div>
		</div>
	)
}