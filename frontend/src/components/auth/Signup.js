// @ts-check

import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/User';

function Signup({ toggle, setToggle }) {
	const { signup } = useContext(UserContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [btn, setBtn] = useState('Sign Up');
	const [msg, setMsg] = useState(
		<p>
			By signing up, you agree to{' '}
			<a
				href="https://docs.google.com/document/d/1h6rzrxmi0X2RLjMRX1IEB1U0orxDM7u8tvg86InHD1k/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer">
				Taskaholic's Beta terms of service.
			</a>
		</p>
	);

	const handleSignup = async () => {
		setBtn('Loading...');
		await signup(name, email, password);
		setBtn('Sign Up');
		setMsg(<p>Please, fill out the fields correctly.</p>);
	};

	return (
		<div className="Auth-form">
			<label>Name:</label>
			<input
				type="text"
				required={true}
				placeholder="Jane Doe"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<label>Email:</label>
			<input
				type="email"
				required={true}
				placeholder="jane@example.com"
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
				<button onClick={() => setToggle(!toggle)}>Cancel</button>
				<button className="Auth-form-btn" onClick={handleSignup}>
					{btn}
				</button>
			</div>
			{msg}
		</div>
	);
}

export default Signup;
