// @ts-check

import React, { useState, useContext } from 'react';
import axios from 'axios';

function ResetPassword() {
	const [token, setToken] = useState('');
	const [password, setPassword] = useState('');
	const [button, setButton] = useState('Update Password');
	const [message, setMessage] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setButton('Loading...');

		try {
			console.log(password, token);
			await axios.put(`/api/v1/auth/resetpassword/${token}`, {
				password: password,
			});
			setButton(null);
			setMessage('Your password has been reset. Refresh to login.');
		} catch (err) {
			setButton(null);
			setMessage('Your temporary password is incorrect. Please, try again.');
		}
	};

	return (
		<div>
			<form className="Auth-form" onSubmit={handleSubmit}>
				<label>Temporary Password:</label>
				<input
					type="text"
					required={true}
					onChange={(e) => {
						setToken(e.target.value);
					}}
				/>
				<label>New Password:</label>
				<input
					type="password"
					required={true}
					minLength={8}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<div>
					{button ? (
						<button className="Auth-form-btn" type="submit">
							{button}
						</button>
					) : null}
				</div>
			</form>
			{message ? <p>{message}</p> : null}
		</div>
	);
}

export default ResetPassword;
