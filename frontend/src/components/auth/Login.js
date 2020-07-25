// @ts-check

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/User';

function Login({ toggle, setToggle }) {
	const { login } = useContext(UserContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [btn, setBtn] = useState('Log In');
	const [err, setErr] = useState(null);

	const handleReset = async () => {
		try {
			await axios.post('/api/v1/auth/forgotpassword', {
				email: email,
			});

			setErr(<p>Please, check your email for reset instructions.</p>);
		} catch (err) {
			console.log(`Reset password error ${err}`);
			setErr(<p>Error: Please, check your email address.</p>);
		}
	};

	const handleLogin = async () => {
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
		<div className="Auth-form">
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
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<div>
				<button onClick={() => setToggle(!toggle)}>Sign Up</button>
				<button className="Auth-form-btn" onClick={() => handleLogin()}>
					{btn}
				</button>
			</div>
			{err}
		</div>
	);
}

export default Login;
