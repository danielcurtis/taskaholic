// @ts-check

import React from 'react';

function List({ setToggle, tasks, setCurrent }) {
	const handleTaskClick = (id) => {
		console.log('list id', id);
		setCurrent(id);
		setToggle('Edit');
	};

	console.log('list', tasks);

	if (tasks === undefined) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<h1>List</h1>
				<ul>
					{tasks.map((task) => (
						<li key={task.name} onClick={() => handleTaskClick(task._id)}>
							<span>{task.name}</span>
							<span>{task.due}</span>
							<span>{task.status}</span>
						</li>
					))}
				</ul>

				<button onClick={() => setToggle('Create')}>Create New Item</button>
			</div>
		);
	}
}

export default List;
