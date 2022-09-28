import { useState, useEffect } from 'react';
import { USER_ROLE } from '../../constants/userRoles';
// import {
// 	nameChanged,
// 	usernameChanged
// } from '../../lib/actions/createFormActions';

// import { UserFormsContext } from '../../lib/contexts/UserFormsContext';

// import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import InputCheckbox from '../forms/InputCheckbox';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import style from './UserCreateForm.module.css';
import CrossIcon from '../icons/CrossIcon';
import {
	validateName,
	validateUsername
} from '../../lib/users/userValidation.js';

const UserCreateForm = ({ onClose }) => {
	const { username, name, setUserName, setName } = useFormValues();
	// const { onSuccess } = useContext(UserFormsContext);

	// const [isSubmitting, setIsSubmitting] = useState(false);
	// const { username, name, dispatchFormValues, isFormInvalid } = useCreateForm();

	return (
		<form
			className={style.form}
			// onSubmit={ev =>
			// 	handleSubmit(ev, name, username, setIsSubmitting, onSuccess, closeModal)
			// }
		>
			<IconButton
				className={style.close}
				icon={CrossIcon}
				filled
				onClick={onClose}
			/>
			<div className={style.row}>
				<InputText
					className={style.input}
					label='Nombre'
					placeholder='John Doe'
					error={name.error}
					value={name.value}
					onChange={ev => setName(ev.target.value)}
				></InputText>
				<InputTextAsync
					className={style.input}
					label='Username'
					placeholder='johndoe'
					success={username.value && !username.loading && !username.error}
					loading={username.loading}
					error={username.error}
					value={username.value}
					onChange={ev => setUserName(ev.target.value)}
				></InputTextAsync>
			</div>
			<div className={style.row}>
				<Select name='role'>
					<option value={USER_ROLE.TEACHER}>Profesor</option>
					<option value={USER_ROLE.STUDENT}>Alumno</option>
					<option value={USER_ROLE.OTHER}>Otro</option>
				</Select>
				<div className={style.active}>
					<InputCheckbox name='active' />
					<span>¿Activo?</span>
				</div>
				<Button type='submit'>Crear usuario</Button>
			</div>
		</form>
	);
};

const validateUsernameAsync = async (username, setFormValues) => {
	let error;
	const res = await fetch(`http://localhost:4000/users?username=${username}`);
	if (res.ok) {
		const data = await res.json();
		if (data.length) error = 'Ya está en uso';
	} else {
		error = 'Error al validar';
	}

	setFormValues(prevFormValues => ({
		...prevFormValues,
		username: {
			value: username,
			error,
			loading: false
		}
	}));
};

const useFormValues = () => {
	const [formValues, setFormValues] = useState({
		name: {
			value: '',
			error: undefined
		},
		username: {
			value: '',
			loading: false,
			error: undefined
		}
	});

	useEffect(() => {
		if (formValues.username.loading)
			validateUsernameAsync(formValues.username.value, setFormValues);
	}, [formValues.username.value, formValues.username.loading]);

	const setName = newName => {
		const error = validateName(newName);

		setFormValues({
			...formValues,
			name: { value: newName, error }
		});
	};

	const setUserName = newUserName => {
		const error = validateUsername(newUserName);

		setFormValues({
			...formValues,
			username: { value: newUserName, loading: !error, error }
		});
	};

	return { ...formValues, setName, setUserName };
};

export default UserCreateForm;
