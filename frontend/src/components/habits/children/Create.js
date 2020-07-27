// @ts-check

import React, { useState } from 'react';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';

function Create({ setErr, setLoading }) {
	const [name, setName] = useState('');
	const [streak, setStreak] = useState(0);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			await axios.post(`/api/v1/habits/`, {
				name: name,
				streak: streak,
			});

			setLoading(false);
		} catch (error) {
			console.log(`Create task error: ${error.message}`);
			setErr('Uh oh. Check your Internet and refresh.');
		}
	};

	return (
		<form className="Habits-create" onSubmit={handleSubmit}>
			<div>
				<label>Habit Name:</label>
				<br />
				<input
					type="text"
					minLength={1}
					maxLength={10}
					required={true}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label>Current Streak:</label>
				<br />
				<input
					type="number"
					value={streak}
					onChange={(e) => setStreak(parseInt(e.target.value))}
				/>
			</div>
			<FiPlus className="Habits-create-icon" type="submit" />
		</form>
	);
}

export default Create;
