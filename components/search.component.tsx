import React, { FC, FormEvent, useState } from 'react'
import { FaAngleRight, FaSearch, FaTimes } from 'react-icons/fa';
import { SearchResult } from '../types';

interface SearchComponentProps {
	searchToggle: () => void;
	locationSelected: (placeId: number) => void;
}

async function searchPlaces(term: string): Promise<SearchResult[]> {
	const response = await fetch(`api/search?term=${term}`);
	return await response.json();
}

export const SearchComponent: FC<SearchComponentProps> = ({ searchToggle, locationSelected }) => {
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [results, setResults] = useState<SearchResult[]>([]);

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setResults(await searchPlaces(searchTerm));
	}

	return (
		<div className="search-container">
			<div className="close-container">
				<button className="rounded" onClick={searchToggle}>
					<FaTimes />
				</button>
			</div>

			<form className="search-form" onSubmit={onSubmit}>
				<input type="search" required placeholder="Enter Location" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
				<button>
					<FaSearch />
					Search
				</button>
			</form>

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
