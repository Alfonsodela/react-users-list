import UserRow from './UserRow';
import style from './UsersList.module.css';
import { useState } from 'react';

const UsersList = ({ users }) => {
	const [search, setSearch] = useState('');

	const usersFiltered = filterUsersByName(users, search);
	const usersRender = renderUsers(usersFiltered);

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<label></label>
			<input
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			></input>
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

const renderUsers = users => {
	if (users.length <= 0) return <p>No hay usuarios</p>;

	return users.map(item => <UserRow key={item.name} {...item} />);
};

export default UsersList;
