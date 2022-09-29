import CheckIcon from '../icons/CheckIcon';
import style from './InputCheckbox.module.css';

const InputCheckbox = props => (
	<label className={style.label}>
		<input {...props} type='checkbox' className={style.input}></input>
		<CheckIcon className={style.check}></CheckIcon>
	</label>
);

export default InputCheckbox;
