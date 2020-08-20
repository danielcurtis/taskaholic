// @ts-check

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/User';
import ResetPassword from './ResetPassword';

function Login({ toggle, setToggle }) {
	const { login } = useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [btn, setBtn] = useState('Log In');
	const [err, setErr] = useState(null);
	const [reset, setReset] = useState(false);

	const handleReset = async () => {
		try {
			setErr(<p>Loading...</p>);
			await axios.post('/api/v1/auth/forgotpassword', {
				email: email,
			});

			setErr(<p>Check your email for instructions. Be sure to check spam!</p>);
			setReset(true);
		} catch (err) {
			console.log(`Reset password error ${err}`);
			setErr(<p>It doesn't look like that email exists. Try signing up!</p>);
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setBtn('Loading...');
		await login(email, password);
		setBtn('Log In');
		setErr(
			<p>
				Please, try again or{' '}
				<span className="Auth-form-link" onClick={handleReset}>
					reset your password.
				</span>
			</p>
		);
	};

	return (
		<div>
			<form className="Auth-form" onSubmit={handleLogin}>
				<label>Email:</label>
				<input
					type="email"
					placeholder="jane@example.com"
					required={true}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label>Password:</label>
				<input
					type="password"
					required={true}
					minLength={8}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<div>
					<button onClick={() => setToggle(!toggle)}>Sign Up</button>
					<button className="Auth-form-btn" type="submit">
						{btn}
					</button>
				</div>
			</form>
			{err}
			{reset ? <ResetPassword /> : null}
		</div>
	);
}

export default Login;
