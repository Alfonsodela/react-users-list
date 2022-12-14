export const createUser = async user => {
	try {
		const res = await fetch('http://localhost:4000/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		return res.ok;
	} catch {
		return false;
	}
};

export const findAllUsers = async signal => {
	try {
		const res = await fetch('http://localhost:4000/users', { signal });

		let users;

		if (res.ok) users = await res.json();

		return {
			users,
			error: !res.ok,
			aborted: false
		};
	} catch (err) {
		const isAborted = err.name === 'AbortError';

		return {
			users: undefined,
			error: !isAborted,
			aborted: isAborted
		};
	}
};
