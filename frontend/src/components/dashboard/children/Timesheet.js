// @ts-check

import React from 'react';

function Timesheet() {
	// Placeholder data
	const timeData = [
		{
			task: 'Study with Levonne',
			time: [0, 4.5, 1, 0, 0, 0, 10],
		},
		{
			task: 'Complete biology lab report',
			time: [1.5, 0, 0, 0, 0, 2, 0],
		},
		{
			task: 'Take the dog to the vet	',
			time: [1, 0, 11, 0, 4.3, 0, 0],
		},
		{
			task: 'Build a cool web app in React	',
			time: [0, 0, 1, 0, 0, 0, 1],
		},
	];

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>M</th>
						<th>T</th>
						<th>W</th>
						<th>T</th>
						<th>F</th>
						<th>S</th>
						<th>S</th>
					</tr>
				</thead>
				<tbody>
					{timeData.map((el, a) => {
						let task = el.task;
						if (task.length > 20) task = task.substring(0, 19) + '...';

						return (
							<tr key={a}>
								<td>{task}</td>
								{el.time.map((el, b) => {
									return <td key={b}>{el}</td>;
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Timesheet;
