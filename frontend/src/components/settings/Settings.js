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

	return (
		<div className="Settings">
			<h1>Settings</h1>
			<p>
				As a Beta user, you drive the Taskaholic product. Contact us for support
				or suggestions.
			</p>
			<button className="blue-btn" onClick={logout}>
				Log out
			</button>
			<a href="mailto:support@taskaholic.com">
				<button>Email Us</button>
			</a>
			{loading ? null : (
				<div className="Settings-forms">
					<Details user={user} />
					<Password user={user} />
				</div>
			)}
			<p>
				<a
					href="https://docs.google.com/document/d/1h6rzrxmi0X2RLjMRX1IEB1U0orxDM7u8tvg86InHD1k/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer">
					Terms of Service & Privacy Policy
				</a>
			</p>
		</div>
	);
}

export default Settings;
