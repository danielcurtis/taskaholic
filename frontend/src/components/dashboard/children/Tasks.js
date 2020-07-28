// @ts-check

import React from 'react';
import MapTasks from './MapTasks';
import {
	toDo,
	inProgress,
	paused,
	completed,
} from '../../utils/filterTasks.js';

function Tasks({ tasks }) {
	return (
		<section className="Dashboard-tasks">
			<MapTasks name="To Do" arr={toDo(tasks)} />
			<MapTasks name="In Progress" arr={inProgress(tasks)} />
			<MapTasks name="Completed" arr={completed(tasks)} />
			<MapTasks name="Paused" arr={paused(tasks)} />
		</section>
	);
}

export default Tasks;
