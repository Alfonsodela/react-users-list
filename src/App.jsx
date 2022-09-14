import UsersList from "./components/UsersList";

const users = [
	{
		name: 'Alfonso López de la Manzanara',
		active: true,
		role: 'studentss'
	},
	{
		name: 'Emely Alonzo',
		active: true,
		role: 'student'
	},
	{ 
		name: 'Pablo Castellanos',
		active: false,
		role: 'teacher'
	},
	{
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'teacher'
	}
];

const App = () => (
	<UsersList users={users}/>
);

export default App;