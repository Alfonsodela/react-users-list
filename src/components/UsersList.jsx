import UserRow from './UserRow';
import style from './UsersList.module.css';
import { useState } from 'react';

const UsersList = ({ users, children }) => {
	const [search, setSearch] = useState('');

	const usersFiltered = search
		? users.filter(user => user.name.toLowerCase().startsWith(search.toLowerCase()))
		: users;

	const usersRender =
		usersFiltered.length > 0 ? (
			usersFiltered.map(item => <UserRow key={UserRow.name} {...item} />)
		) : (
			<p>No hay usuarios</p>
		);

	return (
		<div className={style.wrapper}>
			{children}
			<input type='text' name='search' value={search} onChange={(ev) => setSearch(ev.target.value)}
			>

			</input>
			{usersRender}
		</div>
	);
};

export default UsersList;
