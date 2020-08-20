// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Meter from '../utils/Meter';
import Create from './children/Create';
import Edit from './children/Edit';
import Kanban from './children/Kanban';

function Tasks() {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [create, setCreate] = useState(false);
	const [edit, setEdit] = useState(false);
	const [current, setCurrent] = useState();
	const [update, setUpdate] = useState(0);

	useEffect(() => {
		const getTasks = async () => {
			const { data } = await axios.get('/api/v1/tasks');
			setTasks(data.data);
			setLoading(false);
		};

		getTasks();
	}, [update]);

	if (loading) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className="Tasks">
				<div className="flex">
					<h1
						style={{
							fontFamily: `Shrikhand`,
						}}>
						Tasks
					</h1>
					<button onClick={() => setCreate(true)}>Create Task</button>
				</div>
				<Meter arr={tasks} />
				<Kanban
					tasks={tasks}
					update={update}
					setUpdate={setUpdate}
					setEdit={setEdit}
					setCurrent={setCurrent}
				/>
				{create ? (
					<Create setCreate={setCreate} update={update} setUpdate={setUpdate} />
				) : null}
				{edit ? (
					<Edit
						tasks={tasks}
						setEdit={setEdit}
						current={current}
						update={update}
						setUpdate={setUpdate}
					/>
				) : null}
			</div>
		);
	}
}

export default Tasks;
