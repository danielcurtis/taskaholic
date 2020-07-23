// @ts-check

import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/User';

function Signup({ toggle, setToggle }) {
	const { signup } = useContext(UserContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [btn, setBtn] = useState('Sign Up');
	const [err, setErr] = useState(null);

	const inputClass =
		'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-2 mt-1';

	const handleSignup = async () => {
		setBtn('Loading...');
		await signup(name, email, password);
		setBtn('Log In');
		setErr(<p>Please, fill out the fields correctly.</p>);
	};

	return (
		<div>
			<label>Name:</label>
			<input
				className={inputClass}
				type="text"
				placeholder="Jane Doe"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<label>Email:</label>
			<input
				className={inputClass}
				type="email"
				placeholder="jane@example.com"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<label>Password:</label>
			<input
				className={inputClass}
				type="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<div>
				<button onClick={() => setToggle(!toggle)}>Log In</button>
				<button onClick={handleSignup}>{btn}</button>
			</div>
			{err}
		</div>
	);
}

export default Signup;
