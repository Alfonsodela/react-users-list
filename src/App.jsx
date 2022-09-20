import UsersList from "./components/UsersList";
import { USER_ROLE } from "./constants/userRoles";

const users = [
	{
		username: 'Alfonso',
		name: 'Alfonso López de la Manzanara',
		active: true,
		role: USER_ROLE.STUDENT
	},
	{
		username: 'Emely',
		name: 'Emely Alonzo',
		active: true,
		role: USER_ROLE.STUDENT
	},
	{ 
		username: 'Pablo',
		name: 'Pablo Castellanos',
		active: false,
		role: USER_ROLE.TEACHER
	},
	{
		username: 'Jose Miguel',
		name: 'Jose Miguel Fernández',
		active: true,
		role: USER_ROLE.OTHER
	}
];

const App = () => (
	<UsersList initialUsers={users}/>
);

export default App;