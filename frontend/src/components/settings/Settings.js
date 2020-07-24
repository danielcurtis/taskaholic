// @ts-check

import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/User';
import Password from './children/Password';
import Details from './children/Details';

function Settings() {
	const { logout } = useContext(UserContext);
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getMe = async () => {
			const { data } = await axios.get('/api/v1/auth/me');
			setUser(data.data);
			setLoading(false);
		};

		getMe();
	}, []);

	console.log(user);

	return (
		<div className="Settings">
			<h1>Settings</h1>
			<button onClick={logout}>Log out</button>
			{loading ? null : (
				<div>
					<Password user={user} />
					<Details user={user} />
				</div>
			)}
		</div>
	);
}

export default Settings;
