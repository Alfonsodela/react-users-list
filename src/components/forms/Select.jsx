import style from './Select.module.css';
import SelectIcon from '../icons/SelectIcon';

const Select = ({ className, ...props}) => (
	<div className={`${style.wrapper} ${className || ''}`}>
		<select {...props} className={style.select}></select>
		<SelectIcon className={style.icon}></SelectIcon>
	</div>
);

export default Select;
