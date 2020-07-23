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
		<div className="inner bg-white mb-10 rounded-lg">
			<table className="table-auto w-full">
				<thead>
					<tr className="bg-indigo-600 text-white inner">
						<th className="px-2 py-1 rounded-tl-lg">Task</th>
						<th className="px-2 py-1">M</th>
						<th className="px-2 py-1">T</th>
						<th className="px-2 py-1">W</th>
						<th className="px-2 py-1">T</th>
						<th className="px-2 py-1">F</th>
						<th className="px-2 py-1">S</th>
						<th className="px-2 py-1 rounded-tr-lg">S</th>
					</tr>
				</thead>
				<tbody>
					{timeData.map((el, a) => {
						let task = el.task;
						if (task.length > 20) task = task.substring(0, 19) + '...';

						return (
							<tr key={a} className="text-gray-700">
								<td className="px-2 py-1">{task}</td>
								{el.time.map((el, b) => {
									return (
										<td key={b} className="px-2 py-1">
											{el}
										</td>
									);
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
