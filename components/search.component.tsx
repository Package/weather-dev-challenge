import React, { FC, FormEvent } from 'react'
import { FaAngleRight, FaSearch, FaTimes } from 'react-icons/fa';
import { useSearch } from '../hooks/useSearch';

interface SearchComponentProps {
	searchToggle: () => void;
	locationSelected: (placeId: number) => void;
}

export const SearchComponent: FC<SearchComponentProps> = ({ searchToggle, locationSelected }) => {
	const { results, loading, searchTerm, searchFor, searchPlaces } = useSearch();

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		await searchPlaces();
	}

	return (
		<div className="search-container">
			<div className="close-container">
				<button className="rounded" onClick={searchToggle}>
					<FaTimes />
				</button>
			</div>

			<form className="search-form" onSubmit={onSubmit}>
				<input type="search" required autoFocus placeholder="Enter Location" value={searchTerm} onChange={e => searchFor(e.target.value)} />
				<button>
					<FaSearch />
					Search
				</button>
			</form>

			{loading && (
				<p style={{ margin: "1rem auto" }}>Loading...</p>
			)}

			{results.length > 0 && (
				<div className="search-results">
					<h3>Select Location</h3>
					{results.map(result => (
						<div className="search-result" key={result.woeid} onClick={_ => locationSelected(result.woeid)}>
							<span>
								{result.title}
							</span>
							<FaAngleRight />
						</div>
					))}
				</div>
			)}
		</div>
	)
}
