import React from 'react'
import { FaSyncAlt } from 'react-icons/fa'

export const LoadingComponent = () => {
	return (
		<div className="loading-container">
			<span className="loading-inner">
				<FaSyncAlt /> Loading...
			</span>
		</div>
	)
}
