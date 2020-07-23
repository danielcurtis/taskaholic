// @ts-check

import React from 'react';

// Secondary map function
function MapTasks({ name, arr, type }) {
	return (
		<div>
			<h2 className="text-xl py-2 text-indigo-600 font-semibold">{name}</h2>
			<table className="table-fixed w-full mb-10">
				<tbody>
					{arr.map((el, i) => {
						if (el.type === type) {
							return (
								<tr key={i} className="text-gray-700">
									<td className="w-8/12">{el.name}</td>
									<td className="w-2/12">{el.epic}</td>
									<td className="w-2/12">{el.due}</td>
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
		<section className="w-3/6 h-full shadow-lg shadow-inner rounded-lg px-6 py-4 inner bg-white mx-10">
			<MapTasks name="In Progress" arr={taskData} type="progress" />
			<MapTasks name="To Do" arr={taskData} type="todo" />
			<MapTasks name="Paused" arr={taskData} type="paused" />
			<MapTasks name="Completed" arr={taskData} type="completed" />
		</section>
	);
}

export default Tasks;
