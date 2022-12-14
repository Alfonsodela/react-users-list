import { useState, useEffect } from 'react';
import {
	validateName,
	validateUsername
} from '../../lib/users/userValidation.js';

export const useCreateForm = () => {
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

	const setUsernameError = error =>
		setFormValues(prevFormValues => ({
			...prevFormValues,
			username: {
				value: prevFormValues.username.value,
				error,
				loading: false
			}
		}));

	useEffect(() => {
		if (formValues.username.loading) {
			const controller = new AbortController();

			const timeoutId = setTimeout(
				() =>
					validateUsernameIsAvailable(
						formValues.username.value,
						setUsernameError,
						controller.signal
					),
				500
			);
			return () => {
				controller.abort();
				clearTimeout(timeoutId);
			};
		}
	}, [formValues.username.value, formValues.username.loading]);

	return { ...formValues, setName, setUserName };
};

const validateUsernameIsAvailable = async (username, setUsernameError, signal) => {
	let error;
	try {
		const res = await fetch(
			`http://localhost:4000/users?username=${username}`,
			{ signal }
		);
		if (res.ok) {
			const data = await res.json();
			if (data.length) error = 'Ya está en uso';
		} else {
			error = 'Error al validar';
		}
	} catch (err) {
		if (err.name === 'AbortError') return;
		error = 'Error al validar';
	}

	setUsernameError(error);
};
