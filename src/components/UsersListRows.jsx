import UserRow from "./UserRow";

    const UsersListRows = ({users}) => {
        if (users.length <= 0) return <p>No hay usuarios</p>;
    
        return users.map(item => <UserRow key={item.name} {...item} />);
    };


export default UsersListRows;