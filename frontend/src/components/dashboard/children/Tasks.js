// @ts-check

import React from 'react';

// Secondary map function
function MapTasks({ name, arr }) {
	const convertDate = (d) => {
		let date = new Date(d);
		return (
			(date.getMonth() > 8
				? date.getMonth() + 1
				: '0' + (date.getMonth() + 1)) +
			'/' +
			(date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
			'/' +
			date.getFullYear()
		);
	};

	arr.sort((a, b) => (a.due > b.due ? 1 : -1));

	let nameEl = <h2>{name}</h2>;

	if (name === 'To Do') nameEl = <h2 className="red">{name}</h2>;
	else if (name === 'In Progress') nameEl = <h2 className="blue">{name}</h2>;
	else if (name === 'Completed') nameEl = <h2 className="green">{name}</h2>;

	return arr.length > 0 ? (
		<div className="Dashboard-tasks-map">
			{nameEl}
			<div>
				{arr.map((el, i) => {
					return (
						<div key={i} className="Dashboard-tasks-map-group">
							<div>{el.name}</div>
							<div>
								<div>{el.tag.name}</div>
								<div>{convertDate(el.due)}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	) : null;
}

function Tasks({ tasks }) {
	let toDo = tasks.filter((el) => el.status === 'To Do');
	let inProgress = tasks.filter((el) => el.status === 'In Progress');
	let paused = tasks.filter((el) => el.status === 'Paused');
	let completed = tasks.filter((el) => el.status === 'Completed');

	return (
		<section className="Dashboard-tasks">
			<MapTasks name="To Do" arr={toDo} />
			<MapTasks name="In Progress" arr={inProgress} />
			<MapTasks name="Completed" arr={completed} />
			<MapTasks name="Paused" arr={paused} />
		</section>
	);
}

export default Tasks;
