import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users, children }) => {
	const usersRender =
		users.length > 0 ? (
			users.map(item => <UserRow key={UserRow.name} {...item} />)
		) : (
			<p>No hay usuarios</p>
		);

	return (
		<div className={style.list}>
			{children} 
			{usersRender}
		</div>
	);
};

export default UsersList;
