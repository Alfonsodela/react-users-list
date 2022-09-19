import UsersList from "./components/UsersList";

const users = [
	{
		username: 'Alfonso',
		name: 'Alfonso López de la Manzanara',
		active: true,
		role: 'studentx'
	},
	{
		username: 'Emely',
		name: 'Emely Alonzo',
		active: true,
		role: 'student'
	},
	{ 
		username: 'Pablo',
		name: 'Pablo Castellanos',
		active: false,
		role: 'teacher'
	},
	{
		username: 'Jose Miguel',
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'teacher'
	}
];

const App = () => (
	<UsersList initialUsers={users}/>
);

export default App;