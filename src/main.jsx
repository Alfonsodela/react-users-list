import ReactDOM from 'react-dom';
import './index.css';

const getData = (name, rol) => (
	<div>
		<span>{name}</span>
		<span>{rol}</span>
	</div>
)
	


const app = (
	<div>
		{getData('Alfonso', 'estudiante')}
	</div>
	
)

const container = document.getElementById('root');

ReactDOM.render(app, container);
