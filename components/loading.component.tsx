import React from 'react'
import { FaSyncAlt } from 'react-icons/fa'

export const LoadingComponent = () => {
	return (
		<div className="loader">
			<span className="loader--inner">
				<FaSyncAlt />
				Loading...
			</span>
		</div>
	)
}
