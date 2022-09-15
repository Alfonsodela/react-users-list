import UsersList from "./components/UsersList";

const users = [
	{
		id: 0,
		name: 'Alfonso López de la Manzanara',
		active: true,
		role: 'studentss'
	},
	{
		id: 1,
		name: 'Emely Alonzo',
		active: true,
		role: 'student'
	},
	{ 
		id: 2,
		name: 'Pablo Castellanos',
		active: false,
		role: 'teacher'
	},
	{
		id: 3,
		name: 'Jose Miguel Fernández',
		active: true,
		role: 'teacher'
	}
];

const App = () => (
	<UsersList initialUsers={users}/>
);

export default App;