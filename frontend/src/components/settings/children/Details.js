// @ts-check

import React, { useState } from 'react';
import axios from 'axios';

function Details({ user }) {
	const [email, setEmail] = useState(user.email);
	const [name, setName] = useState(user.name);
	const [msg, setMsg] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.put('/api/v1/auth/updatedetails', {
				email: email,
				name: name,
			});
			setMsg('Details updated!');
		} catch (error) {
			console.log(`Create task error: ${error.message}`);
			setMsg('Uh oh... please check your Internet and try again.');
		}
	};

	return (
		<div>
			<h1>Update Details</h1>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input
					type="text"
					minLength={1}
					required={true}
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>

				<label>Email:</label>
				<input
					type="email"
					required={true}
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>

				<input type="submit" value="Submit" />
			</form>

			<p>{msg}</p>
		</div>
	);
}

export default Details;
