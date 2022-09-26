import {
	filterActiveUsers,
	filterUsersByName,
	sortUsers,
	paginateUsers
} from '../users/filterUsers';
import { useState, useEffect } from 'react';

const fetchUsers = async (setUsers, signal) => {
	const res = await fetch('http://localhost:4000/users', { signal });
	const data = await res.json();
	setUsers(data);
};

const getUsersToDisplay = (
	users,
	{ search, onlyActive, sortBy, page, itemsPerPage }
) => {
	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const { paginatedUsers, totalPages } = paginateUsers(
		usersFiltered,
		page,
		itemsPerPage
	);

	return { paginatedUsers, totalPages };
};

export const useUsers = filters => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		fetchUsers(setUsers, controller.signal);

		return () => controller.abort();
	}, []);

	const { paginatedUsers, totalPages } = getUsersToDisplay(users, filters);

	return { users: paginatedUsers, totalPages };
};
