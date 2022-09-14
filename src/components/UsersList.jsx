import UserRow from './UserRow';
import style from './UsersList.module.css';
import { useState } from 'react';

const UsersList = ({ users }) => {
	const [search, setSearch] = useState('');

	const usersRender = filterAndRenderUsers(users, search);

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

const filterAndRenderUsers = (users, search) => {
	const normalizedSearch = search.toLowerCase();

	const usersFiltered = search
		? users.filter(user =>
				user.name.toLowerCase().startsWith(search.toLowerCase(normalizedSearch))
		  )
		: users;

	const usersRender =
		usersFiltered.length > 0 ? (
			usersFiltered.map(item => <UserRow key={item.name} {...item} />)
		) : (
			<p>No hay usuarios</p>
		);

	return usersRender;
};

export default UsersList;
