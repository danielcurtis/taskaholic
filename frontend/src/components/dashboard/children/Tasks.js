// @ts-check

import React from 'react';

// Secondary map function
function MapTasks({ name, arr, type }) {
	return (
		<div>
			<h2>{name}</h2>
			<table>
				<tbody>
					{arr.map((el, i) => {
						if (el.type === type) {
							return (
								<tr key={i}>
									<td>{el.name}</td>
									<td>{el.epic}</td>
									<td>{el.due}</td>
								</tr>
							);
						} else return null;
					})}
				</tbody>
			</table>
		</div>
	);
}

function Tasks({ taskData }) {
	return (
		<section>
			<MapTasks name="In Progress" arr={taskData} type="progress" />
			<MapTasks name="To Do" arr={taskData} type="todo" />
			<MapTasks name="Paused" arr={taskData} type="paused" />
			<MapTasks name="Completed" arr={taskData} type="completed" />
		</section>
	);
}

export default Tasks;
