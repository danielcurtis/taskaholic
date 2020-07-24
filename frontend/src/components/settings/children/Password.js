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
		<div className="Settings-password">
			<h2>Update Password</h2>
			<form onSubmit={handleSubmit}>
				<label>Old Password:</label>
				<input
					type="password"
					minLength={8}
					value={current}
					onChange={(e) => {
						setCurrent(e.target.value);
					}}
				/>

				<label>New Password:</label>
				<input
					type="password"
					minLength={8}
					value={pwd}
					onChange={(e) => {
						setPwd(e.target.value);
					}}
				/>

				<button type="submit">Update</button>
			</form>

			<p>{msg}</p>
		</div>
	);
}

export default Password;
