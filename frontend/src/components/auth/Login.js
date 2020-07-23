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

	const inputClass =
		'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-2 mt-1';

	const handleReset = async () => {
		try {
			await axios.post('/api/v1/auth/forgotpassword', {
				email: email,
			});

			setErr(
				<p className="mt-2 text-blue-500">
					Please, check your email for reset instructions.
				</p>
			);
		} catch (err) {
			console.log(`ResetPwd err ${err}`);
			setErr(
				<p className="mt-2 text-red-500">
					Error: Please, check your email address.
				</p>
			);
		}
	};

	const handleLogin = async () => {
		setBtn('Loading...');
		await login(email, password);
		setBtn('Log In');
		setErr(
			<p className="mt-2 text-red-500">
				Please, try again or{' '}
				<span className="underline cursor-pointer" onClick={handleReset}>
					reset your password.
				</span>
			</p>
		);
	};

	return (
		<div>
			<label className="font-medium">Email:</label>
			<input
				className={inputClass}
				type="email"
				placeholder="jane@example.com"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<label className="font-medium">Password:</label>
			<input
				className={inputClass}
				type="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<div className="flex justify-end mt-4">
				<button
					className="bg-owl-grn hover:bg-blue-700 text-white font-bold py-2 px-4 border border-owl-grn hover:border-transparent rounded-lg mr-2"
					onClick={() => handleLogin()}>
					{btn}
				</button>
				<button
					className="bg-transparent hover:bg-blue-700 text-owl-grn font-bold hover:text-white py-2 px-4 border border-owl-grn hover:border-transparent rounded-lg"
					onClick={() => setToggle(!toggle)}>
					Sign Up
				</button>
			</div>
			{err}
		</div>
	);
}

export default Login;
