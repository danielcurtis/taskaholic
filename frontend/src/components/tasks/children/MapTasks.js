// @ts-check

import React from 'react';
import { FaTag, FaCalendarCheck } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import convertDate from '../../utils/convertDate';
import colorFromName from '../../utils/colorFromName';

function MapTasks({ tasks, name, handleTaskClick }) {
	tasks.sort((a, b) => (a.due > b.due ? 1 : -1));

	return tasks.length > 0 ? (
		<div className="Tags-list">
			<h2 className={colorFromName(name)}>{name}</h2>

			<div>
				{tasks.map((task) => {
					let time = 0;
					task.timelog.map((el) => (time += parseInt(el[1])));

					return (
						<div
							key={task._id}
							className="Tags-list-item"
							onClick={() => handleTaskClick(task._id)}>
							<h2>
								<FaCalendarCheck
									style={{ marginRight: '8px', color: '#007aff' }}
								/>{' '}
								{task.name}
							</h2>
							<p style={{ marginBottom: '8px', fontWeight: 'bold' }}>
								{`${time} hours logged`}
							</p>
							<p style={{ marginTop: 0 }}>{task.description}</p>
							<span className="Tags-list-item-meta">
								<FaTag style={{ marginRight: '3px', fontSize: '10px' }} />
								{task.tag.name}
							</span>
							<span className="Tags-list-item-meta">
								<FiClock style={{ marginRight: '3px', fontSize: '10px' }} />
								{convertDate(task.due)}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	) : null;
}

export default MapTasks;
