// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meter from './children/Meter';
import Habits from './children/Habits';
import Header from './children/Header';
import Tasks from './children/Tasks';
import Timelog from './children/Timelog';

function Dashboard() {
	const [loading, setLoading] = useState(true);
	const [rawTasks, setTasks] = useState([]);
	const [habits, setHabits] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const _tasks = await axios.get('/api/v1/tasks/');
			const _habits = await axios.get('/api/v1/habits/');

			setTasks(_tasks.data.data);
			setHabits(_habits.data.data);
			setLoading(false);
		};
		getData();
	}, []);

	let sunday = 0;
	let monday = 0;
	let date = new Date();
	let day = date.getDay() || 7;
	if (day !== 1) sunday = new Date(date.setHours(-24 * (day - 0))).getTime();
	if (day !== 7) monday = new Date(date.setHours(-24 * (day - 13))).getTime();

	let tasks = rawTasks.filter((el) => new Date(el.due).getTime() > sunday);
	tasks = tasks.filter((el) => new Date(el.due).getTime() < monday);

	return (
		<div>
			<Header />
			<div className="Dashboard">
				<h1>Tasks This Week</h1>
				{loading ? <div>Loading...</div> : <Tasks tasks={tasks} />}
				{loading ? null : <Meter tasks={tasks} />}
				<div>
					<div style={{ width: '600px' }}>
						<h1>Top Habits</h1>
						{loading ? <div></div> : <Habits habits={habits} />}
					</div>
					<div>
						<h1>Timesheet</h1>
						{loading ? <div></div> : <Timelog tasks={tasks} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
