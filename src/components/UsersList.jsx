import UserRow from './UserRow';
import style from './UsersList.module.css';
import { useState } from 'react';

const UsersList = ({ users }) => {
	const [search, setSearch] = useState('');
	const [onlyActive, setOnlyActive] = useState(false);
	const [sortBy, setSortBy] = useState(0);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);
	const usersRender = renderUsers(usersFiltered);

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<form className={style.form}>
				<input
					type='text'
					value={search}
					onChange={ev => setSearch(ev.target.value)}
				></input>
				<div className={style.active}>
					<input
						type='checkbox'
						checked={onlyActive}
						onChange={ev => setOnlyActive(ev.target.checked)}
					></input>
					<span>Sólo activos</span>
				</div>
				<select value={sortBy} onChange={ev => setSortBy(Number(ev.target.value))}>
					<option value={0}>Por defecto</option>
					<option value={1}>Por nombre</option>
				</select>
			</form>
			{usersRender}
		</div>
	);
};

const filterUsersByName = (users, search) => {
	if (!search) return users;

	const lowerCasedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCasedSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) return users;

	return users.filter(user => user.active);
};

const renderUsers = users => {
	if (users.length <= 0) return <p>No hay usuarios</p>;

	return users.map(item => <UserRow key={item.name} {...item} />);
};

const sortUsers = (users, sortBy) => {
	switch (sortBy) {
		case 1:
			return users.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
			 return 0;
			});
		default:
			return users;
	}
};

export default UsersList;
