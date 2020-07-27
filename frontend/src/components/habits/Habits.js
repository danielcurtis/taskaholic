// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import Create from './children/Create';

function Habits() {
	const [habits, setHabits] = useState([]);
	const [err, setErr] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getHabits = async () => {
			let { data } = await axios.get('/api/v1/habits/');
			data = data.data.sort((a, b) => (a.streak < b.streak ? 1 : -1));
			setHabits(data);
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
			<h1>Your Habits</h1>

			{habits.map((el, i) => {
				return (
					<div className="Habits-list" key={el.name}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<h1>{el.streak}</h1>
							<strong>{el.name}</strong>
						</div>
						<div>
							<FiPlus
								className="Habits-list-icons"
								onClick={async () => {
									await handleStreak([el._id, el.streak, 1]);
								}}
							/>
							<FiMinus
								className="Habits-list-icons"
								onClick={async () => {
									await handleStreak([el._id, el.streak, -1]);
								}}
							/>
							<FiTrash2
								className="Habits-list-icons red"
								onClick={async () => {
									await handleDelete(el._id);
								}}
							/>
						</div>
					</div>
				);
			})}

			<Create setErr={setErr} setLoading={setLoading} />
			<p style={{ color: '#ec1416' }}>{err}</p>
		</div>
	);
}

export default Habits;
