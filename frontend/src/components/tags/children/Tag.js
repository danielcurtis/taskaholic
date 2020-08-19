import React from 'react';
import { AiFillClockCircle, AiFillCalendar } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import convertDate from '../../utils/convertDate';

function Tag({ tag, setEdit, setCurrent }) {
	console.log(tag);

	let time = 0;
	let toDo = 0;
	let completed = 0;

	for (let i = 0; i < tag.tasks.length; i++) {
		for (let x = 0; x < tag.tasks[i].timelog.length; x++) {
			time += tag.tasks[i].timelog[x][1];
		}

		if (
			tag.tasks[i].status === 'To Do' ||
			tag.tasks[i].status === 'In Progress' ||
			tag.tasks[i].status === 'Paused'
		) {
			toDo += 1;
		} else if (tag.tasks[i].status === 'Completed') {
			completed += 1;
		}
	}

	const onEditClick = (id) => {
		setCurrent(id);
		setEdit(true);
	};

	return (
		<div className="Tags-Tag">
			<div className="flex">
				<strong>{tag.name}</strong>
				<FaPencilAlt
					className="Tasks-Kanban-edit-btn"
					onClick={() => onEditClick(tag.id)}
				/>
			</div>
			<p>{tag.description}</p>

			<div className="flex" style={{ justifyContent: 'left' }}>
				<div className="Tags-Tag-tag">
					<AiFillClockCircle
						style={{
							marginRight: '3px',
							fontSize: '10px',
						}}
					/>
					{time} hrs
				</div>

				<div className="Tags-Tag-tag">
					<AiFillCalendar
						style={{
							marginRight: '3px',
							fontSize: '10px',
						}}
					/>
					{convertDate(tag.due)}
				</div>

				<em className="Tags-Tag-tag">
					{completed} out of {completed + toDo} tasks completed
				</em>
			</div>
		</div>
	);
}

export default Tag;
