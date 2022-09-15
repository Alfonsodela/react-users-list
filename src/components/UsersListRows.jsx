import UserRow from './UserRow';

const UsersListRows = ({ users, toggleUserActive }) => {
	if (!users.length) return <p>No hay usuarios</p>;

	return users.map(item => (
		<UserRow key={item.id} toggleUserActive={toggleUserActive} {...item} />
	));
};

export default UsersListRows;
