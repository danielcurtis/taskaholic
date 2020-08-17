// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import convertDate from '../utils/convertDate';
import Create from './children/Create';

function Habits() {
	const [habits, setHabits] = useState([]);
	const [create, setCreate] = useState(false);
	const [update, setUpdate] = useState(0);
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
		<div className="Habits">
			<div className="flex">
				<h1>Habits</h1>
				<button onClick={() => setCreate(true)}>New Habit</button>
			</div>

			{habits.map((el, i) => {
				console.log(el);
				return (
					<div className="Habits-list flex" key={el.name}>
						<div className="flex">
							<h1>{el.streak}</h1>
							<div>
								<strong>{el.name}</strong>
								<br />
								<small>Started {convertDate(el.createdAt)}</small>
							</div>
						</div>

						<div>
							<FiPlus
								className="Habits-list-icons"
								onClick={async () => {
									await handleStreak([el._id, el.streak, 1]);
								}}
							/>
							<br />
							<FiMinus
								className="Habits-list-icons"
								onClick={async () => {
									await handleStreak([el._id, el.streak, -1]);
								}}
							/>
							<br />
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

			{create ? (
				<Create setErr={setErr} setLoading={setLoading} setCreate={setCreate} />
			) : null}

			<p className="red">{err}</p>
		</div>
	);
}

export default Habits;
