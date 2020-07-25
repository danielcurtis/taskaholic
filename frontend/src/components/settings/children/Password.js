// @ts-check

import React, { useState } from 'react';
import axios from 'axios';

function Password({ user }) {
	const [current, setCurrent] = useState('');
	const [pwd, setPwd] = useState('');
	const [msg, setMsg] = useState(<p></p>);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.put('/api/v1/auth/updatepassword', {
				currentPassword: current,
				newPassword: pwd,
			});
			setPwd('');
			setCurrent('');
			setMsg(<p style={{ color: '#007aff' }}>Password updated!</p>);
		} catch (error) {
			console.log(`Update password error: ${error.message}`);
			setMsg(
				<p style={{ color: '#ec1416' }}>
					Uh oh. Check your connection and refresh.
				</p>
			);
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

				<button className="blue-btn" type="submit">
					Update
				</button>
			</form>

			{msg}
		</div>
	);
}

export default Password;
