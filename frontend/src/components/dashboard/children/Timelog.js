// @ts-check

import React from 'react';

function Timelog({ tasks }) {
	// Filter tasks without time logged
	tasks = tasks.filter((el) => el['timelog'].length > 0);

	// Get this weeks dates
	const weekDates = [];

	for (let i = 1; i < 8; i++) {
		const today = new Date();
		const day = today.getDay() || 7;

		if (day !== i) today.setHours(-24 * (day - i));

		weekDates.push(today);
	}

	let taskTimes = [];

	tasks.map((el) => {
		let obj = {
			task: el.name,
			times: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
		};

		for (let i = 0; i < el.timelog.length; i++) {
			for (let j = 0; j < weekDates.length; j++) {
				let taskDate = new Date(el.timelog[i][0]).toDateString();
				let weekDate = new Date(weekDates[j]).toDateString();

				if (taskDate === weekDate) obj.times[j] = el.timelog[i][1];
			}
		}
		taskTimes.push(obj);
	});

	return (
		<div className="Dashboard-timelog">
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Mo</th>
						<th>Tu</th>
						<th>We</th>
						<th>Th</th>
						<th>Fr</th>
						<th>Sa</th>
						<th>Su</th>
					</tr>
				</thead>
				<tbody>
					{taskTimes.map((el, i) => {
						return (
							<tr key={i}>
								<td>{el.task}</td>
								<td
									className={el.times[0] !== 0 ? 'Dashboard-timelog-time' : ''}>
									{el.times[0] !== 0 ? el.times[0] : ''}
								</td>
								<td
									className={el.times[1] !== 0 ? 'Dashboard-timelog-time' : ''}>
									{el.times[1] !== 0 ? el.times[1] : ''}
								</td>
								<td
									className={el.times[2] !== 0 ? 'Dashboard-timelog-time' : ''}>
									{el.times[2] !== 0 ? el.times[2] : ''}
								</td>
								<td
									className={el.times[3] !== 0 ? 'Dashboard-timelog-time' : ''}>
									{el.times[3] !== 0 ? el.times[3] : ''}
								</td>
								<td
									className={el.times[4] !== 0 ? 'Dashboard-timelog-time' : ''}>
									{el.times[4] !== 0 ? el.times[4] : ''}
								</td>
								<td
									className={el.times[5] !== 0 ? 'Dashboard-timelog-time' : ''}>
									{el.times[5] !== 0 ? el.times[5] : ''}
								</td>
								<td
									className={el.times[6] !== 0 ? 'Dashboard-timelog-time' : ''}>
									{el.times[6] !== 0 ? el.times[6] : ''}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Timelog;
