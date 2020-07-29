// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meter from '../utils/Meter';
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

	let tasks = rawTasks.filter((el) => {
		const getMonday = (date) => {
			let mon = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
			return new Date(date.setDate(mon)).setHours(0, 0, 0, 0);
		};

		const getSunday = (date) => {
			let sun = date.getDate() - (date.getDay() - 1) + 6;
			return new Date(date.setDate(sun)).setHours(0, 0, 0, 0);
		};

		let dueSecs = new Date(el.due).getTime();
		let sunSecs = getSunday(new Date());
		let monSecs = getMonday(new Date());

		return dueSecs >= monSecs && dueSecs <= sunSecs;
	});

	return (
		<div>
			<Header />
			<div className="Dashboard">
				{loading ? null : <Meter arr={tasks} />}

				<h1>Tasks This Week</h1>
				{loading ? <div>Loading...</div> : <Tasks tasks={tasks} />}

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
