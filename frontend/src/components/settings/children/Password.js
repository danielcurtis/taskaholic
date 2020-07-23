// @ts-check

import React, { useState } from 'react';
import axios from 'axios';

function Password({ user }) {
	const [current, setCurrent] = useState('');
	const [pwd, setPwd] = useState('');
	const [msg, setMsg] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.put('/api/v1/auth/updatepassword', {
				currentPassword: current,
				newPassword: pwd,
			});
			setPwd('');
			setCurrent('');
			setMsg('Password updated!');
		} catch (error) {
			console.log(`Create task error: ${error.message}`);
			setMsg('Uh oh... please check your Internet and try again.');
		}
	};

	return (
		<div>
			<h1>Update Password</h1>
			<form onSubmit={handleSubmit}>
				<label>Old Password:</label>
				<input
					type="password"
					value={current}
					onChange={(e) => {
						setCurrent(e.target.value);
					}}
				/>

				<label>New Password:</label>
				<input
					type="password"
					value={pwd}
					onChange={(e) => {
						setPwd(e.target.value);
					}}
				/>

				<input type="submit" value="Submit" />
			</form>

			<p>{msg}</p>
		</div>
	);
}

export default Password;
