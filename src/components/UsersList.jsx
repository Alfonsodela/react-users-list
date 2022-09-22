import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import {
	filterActiveUsers,
	filterUsersByName,
	sortUsers,
	paginateUsers
} from '../lib/users/filterUsers';
import { useFilters } from '../lib/hooks/useFilters';
import UsersListPagination from './UsersListPagination';
import { useState, useEffect } from 'react';

const UsersList = () => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters();

	const { users, totalPages } = useUsers(filters);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UsersListFilters
				search={filters.search}
				onlyActive={filters.onlyActive}
				sortBy={filters.sortBy}
				setSearch={setSearch}
				setOnlyActive={setOnlyActive}
				setSortBy={setSortBy}
			/>

			<UsersListRows users={users} />
			<UsersListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
				totalPages={totalPages}
			/>
		</div>
	);
};

const fetchUsers = async (setUsers, signal) => {
	const res = await fetch('http://localhost:4000/users', {signal});
	const data = await res.json();
	setUsers(data);
};

const useUsers = ({ search, onlyActive, sortBy, page, itemsPerPage }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		
		fetchUsers(setUsers, controller.signal);

		controller.abort();
	}, []);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const totalPages = Math.ceil(usersFiltered.length / itemsPerPage);

	usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage);

	return { users: usersFiltered, totalPages };
};

export default UsersList;
