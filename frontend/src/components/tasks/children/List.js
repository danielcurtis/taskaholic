// @ts-check

import React from 'react';
import { FaTag, FaCalendarCheck } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

function List({ setToggle, tasks, setCurrent }) {
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
					<h1>Your Tasks</h1>
					<button
						onClick={() => setToggle('Create')}
						style={{ marginLeft: '30px' }}>
						Create Task
					</button>
				</div>

				<div className="Tags-list">
					{tasks.map((task) => {
						console.log(task);
						let time = 0;

						task.timelog.map((el) => (time += parseInt(el[1])));
						console.log(time);

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
								<span className="Tags-list-item-meta">{task.status}</span>
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
		);
	}
}

export default List;
