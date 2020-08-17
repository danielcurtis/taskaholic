// @ts-check

import React, { useState } from 'react';
import axios from 'axios';

function Create({ setErr, setLoading, setCreate }) {
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

			setCreate(false);
			setLoading(false);
		} catch (error) {
			console.log(`Create task error: ${error.message}`);
			setErr('Uh oh. Check your Internet and refresh.');
		}
	};

	return (
		<div className="Habits-Create">
			<div className="Habits-Create-form">
				<form onSubmit={handleSubmit}>
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
					<br />

					<label>Current Streak:</label>
					<br />
					<input
						type="number"
						value={streak}
						onChange={(e) => setStreak(parseInt(e.target.value))}
					/>
					<br />

					<div style={{ textAlign: 'right' }}>
						<button onClick={() => setCreate(false)}>Cancel</button>
						{` `}
						<button className="blue-btn" type="submit">
							New Habit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Create;
