// @ts-check

import React, { useState } from 'react';
import axios from 'axios';

function Details({ user }) {
	const [email, setEmail] = useState(user.email);
	const [name, setName] = useState(user.name);
	const [msg, setMsg] = useState(<p></p>);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.put('/api/v1/auth/updatedetails', {
				email: email,
				name: name,
			});
			setMsg(<p style={{ color: '#007aff' }}>Details updated!</p>);
		} catch (error) {
			console.log(`Update details error: ${error.message}`);
			setMsg(
				<p style={{ color: '#ec1416' }}>
					Uh oh. Check your connection and refresh.
				</p>
			);
		}
	};

	return (
		<div className="Settings-details">
			<h2>Update Details</h2>
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

				<button className="blue-btn" type="submit">
					Update
				</button>
			</form>

			{msg}
		</div>
	);
}

export default Details;
