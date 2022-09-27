import { useState } from 'react';
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
import { validateName, validateUserName } from '../../lib/users/userValidation';

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
					// success={username.value && !username.loading && !username.error}
					// loading={username.loading}
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

const useFormValues = () => {
	const [formValues, setFormValues] = useState({
		name: { value: '', error: undefined },
		username: { value: '', error: undefined }
	});

	const setName = newName => {
		const error = validateName(newName);

		setFormValues({
			...formValues,
			name: { value: newName, error }
		});
	};

	const setUserName = newUserName => {
        const error = validateUserName(newUserName)

		setFormValues({
			...formValues,
			username: { value: newUserName, error }
		});
	};

    return {...formValues, setName, setUserName}
};

export default UserCreateForm;
