// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './children/Create';

function Habits() {
	const [habits, setHabits] = useState([]);
	const [err, setErr] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getHabits = async () => {
			const { data } = await axios.get('/api/v1/habits/');
			setHabits(data.data);
		};
		getHabits();
	}, [loading]);

	const handleDelete = async (id) => {
		setLoading(true);
		await axios.delete(`/api/v1/habits/${id}`);
		setLoading(false);
	};

	const handleStreak = async (arr) => {
		setLoading(true);
		await axios.put(`/api/v1/habits/${arr[0]}`, {
			streak: arr[1] + arr[2],
		});
		setLoading(false);
	};

	return (
		<div>
			{habits.map((el, i) => {
				return (
					<div key={el.name}>
						<p>
							{el.name} | {el.streak}
						</p>
						<button
							onClick={async () => {
								await handleStreak([el._id, el.streak, 1]);
							}}>
							Increase
						</button>
						<button
							onClick={async () => {
								await handleDelete(el._id);
							}}>
							Delete
						</button>
						<button
							onClick={async () => {
								await handleStreak([el._id, el.streak, -1]);
							}}>
							Decrease
						</button>
					</div>
				);
			})}

			<Create setErr={setErr} setLoading={setLoading} />

			<p style={{ color: '#ec1416' }}>{err}</p>
		</div>
	);
}

export default Habits;
