import { useState } from "react";
import { SearchResult } from "../types";

interface UseSearchHook {
	results: SearchResult[];
	loading: boolean;
	searchTerm: string;
	searchFor: (term: string) => void;
	searchPlaces: () => Promise<void>;
}

export function useSearch(): UseSearchHook {
	const [results, setResults] = useState<SearchResult[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	async function searchPlaces() {
		if (searchTerm.length === 0) return;

		setResults([]);
		setLoading(true);

		const response = await fetch(`api/search?term=${searchTerm}`);
		const json = await response.json();

		setResults(json);
		setLoading(false);
	}

	function searchFor(term: string) {
		setSearchTerm(term);
	}

	return {
		results,
		loading,
		searchTerm,
		searchFor,
		searchPlaces
	}
}