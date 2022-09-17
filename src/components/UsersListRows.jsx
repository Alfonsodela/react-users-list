import UserRow from "./UserRow";

const UsersListRows = ({ users }) => {
	if (!users.length) return <p>No hay usuarios</p>;

	return users.map(item => <UserRow key={item.username} {...item} />);
};

export default UsersListRows;
