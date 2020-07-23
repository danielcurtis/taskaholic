// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Habits() {
	const [habits, setHabits] = useState([]);
	const [name, setName] = useState('');
	const [err, setErr] = useState('');

	useEffect(() => {
		const getHabits = async () => {
			const { data } = await axios.get('/api/v1/habits/');
			setHabits(data.data);
		};

		getHabits();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post(`/api/v1/habits/`, {
				name: name,
				streak: 0,
			});
		} catch (error) {
			console.log(`Create task error: ${error.message}`);
			setErr('Uh oh... please check your Internet and try again.');
		}
	};

	return (
		<div>
			{habits.map((el, i) => {
				return (
					<div>
						<p>
							{el.name} | {el.streak}
						</p>
						<button>Increase</button>
						<button>Delete</button>
						<button>Decrease</button>
					</div>
				);
			})}

			<br />

			<form onSubmit={handleSubmit}>
				<label>Add habit</label>
				<input
					type="text"
					minLength={1}
					required={true}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input type="submit" value="Submit"></input>
			</form>

			<p>{err}</p>
		</div>
	);
}

export default Habits;
