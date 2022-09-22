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
import { useState } from 'react';
import UsersListPagination from './UsersListPagination';

const UsersList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters();
	const [page, setPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(2);

	const { users } = getUsers(initialUsers, {
		search,
		onlyActive,
		sortBy,
		page,
		itemsPerPage
	});

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunctions}
			/>

			<UsersListRows users={users} />
			<UsersListPagination
				page={page}
				itemsPerPage={itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
			/>
		</div>
	);
};

const getUsers = (
	initialUsers,
	{ search, onlyActive, sortBy, page, itemsPerPage }
) => {
	let usersFiltered = filterActiveUsers(initialUsers, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);
	usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage);

	return { users: usersFiltered };
};

export default UsersList;
