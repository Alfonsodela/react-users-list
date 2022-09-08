import ReactDOM from 'react-dom';
import Title from './components/Title';
import UsersList from './components/UsersList';
import './index.css';

const users = [
	{
		name: 'Alfonso López de la Manzanara',
		active: 'Activo',
		role: 'Estudiante'
	},
	{
		name: 'Emely Alonzo',
		active: 'Activo',
		role: 'Estudiante'
	},
	{
		name: 'Pablo Castellanos',
		active: 'Activo',
		role: 'Profesor'
	},
	{
		name: 'Jose Miguel Fernández',
		active: 'Activo',
		role: 'Profesor'
	}
];

const app = (
	<UsersList users={users}>
		<Title>Listado de usuarios</Title>
	</UsersList>
);

const container = document.getElementById('root');

ReactDOM.render(app, container);
