// @ts-check

import React from 'react';
import MapTasks from './MapTasks';
import {
	toDo,
	inProgress,
	paused,
	completed,
} from '../../utils/filterTasks.js';
import Meter from '../../utils/Meter';

function List({ setToggle, tasks, setCurrent }) {
	const handleTaskClick = (id) => {
		setCurrent(id);
		setToggle('Edit');
	};

	if (tasks === undefined) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<div className="flex">
					<h1>Your tasks</h1>
					<button
						onClick={() => setToggle('Create')}
						style={{ marginLeft: '30px' }}>
						Create Task
					</button>
				</div>

				<Meter arr={tasks} />

				<div className="Dashboard-tasks">
					<MapTasks
						tasks={toDo(tasks)}
						name="To Do"
						handleTaskClick={handleTaskClick}
					/>
					<MapTasks
						tasks={inProgress(tasks)}
						name="In Progress"
						handleTaskClick={handleTaskClick}
					/>
					<MapTasks
						tasks={completed(tasks)}
						name="Completed"
						handleTaskClick={handleTaskClick}
					/>
					<MapTasks
						tasks={paused(tasks)}
						name="Paused"
						handleTaskClick={handleTaskClick}
					/>
				</div>
			</div>
		);
	}
}

export default List;
