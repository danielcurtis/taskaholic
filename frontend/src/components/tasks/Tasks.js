// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './children/Create';
import List from './children/List';
import Edit from './children/Edit';

function Tasks() {
	const [toggle, setToggle] = useState('List');
	const [tasks, setTasks] = useState([]);
	const [current, setCurrent] = useState('');

	useEffect(() => {
		const getTasks = async () => {
			const { data } = await axios.get('/api/v1/tasks');
			setTasks(data.data);
		};

		getTasks();
	}, [toggle]);

	if (toggle === 'List') {
		return (
			<div>
				<List setToggle={setToggle} tasks={tasks} setCurrent={setCurrent} />
			</div>
		);
	} else if (toggle === 'Edit') {
		return (
			<div>
				<Edit setToggle={setToggle} tasks={tasks} current={current} />
			</div>
		);
	} else if (toggle === 'Create') {
		return (
			<div>
				<Create setToggle={setToggle} />
			</div>
		);
	}
}

export default Tasks;
