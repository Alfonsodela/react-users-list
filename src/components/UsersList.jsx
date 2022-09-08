import UserRow from "./UserRow";

const UsersList = ({ users, children }) => {
	const usersRender = users.map(item => <UserRow key={UserRow.name} {...item} />);
	return (
		<div className='list'>
			{children}
			{usersRender}
		</div>
	);
};

export default UsersList;