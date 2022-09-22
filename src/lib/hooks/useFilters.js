import { useState } from "react"
import { SORT_OPTIONS } from "../../constants/sortOptions";


export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFAULT,
		page: 1,
		itemsPerPage: 2
	});

	const setSearch = search =>
		setFilters({
			...filters,
			page: 1,
			search
		});

	const setOnlyActive = onlyActive => {
		if (onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE)
			setFilters({
				...filters,
				sortBy: SORT_OPTIONS.DEFAULT,
				onlyActive
			});
		else
			setFilters({
				...filters,
				onlyActive
			});
	};

	const setSortBy = sortBy =>
		setFilters({
			...filters,
			page: 1,
			sortBy
		});

	const setPage = newPage => 
	setFilters({
		...filters,
		page: newPage
	});

	const setItemsPerPage = newItemsPerPage =>
	setFilters({
		...filters,
		itemsPerPage: newItemsPerPage
	})

	return {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	};
};