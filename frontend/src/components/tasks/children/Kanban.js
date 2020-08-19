// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AiFillClockCircle, AiFillCalendar, AiFillTag } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa';
import {
	toDo,
	inProgress,
	paused,
	completed,
} from '../../utils/filterTasks.js';
import convertDate from '../../utils/convertDate';

const move = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
	userSelect: 'none',
	border: '1px solid var(--secondary-grey)',
	color: 'var(--main-grey',
	padding: 16,
	borderRadius: 8,
	// change if dragging
	background: isDragging ? 'var(--main-blue)' : 'var(--main-white)',
	marginBottom: isDragging ? 0 : 20,
	// styles to apply on draggables
	...draggableStyle,
});

function Kanban({ tasks, update, setUpdate, setEdit, setCurrent }) {
	const [err, setErr] = useState('');
	const [state, setState] = useState([
		toDo(tasks),
		inProgress(tasks),
		completed(tasks),
		paused(tasks),
	]);

	useEffect(() => {
		const getTasks = async () => {
			const { data } = await axios.get('/api/v1/tasks');

			setState([
				toDo(data.data),
				inProgress(data.data),
				completed(data.data),
				paused(data.data),
			]);
		};

		getTasks();
	}, [update]);

	const titles = ['To Do', 'In Progress', 'Completed', 'Paused'];

	const onDragEnd = (result) => {
		const { source, destination, draggableId } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		// get indices
		const sInd = +source.droppableId;
		const dInd = +destination.droppableId;

		// dropped inside same list
		if (sInd === dInd) {
			return;
		} else {
			const updateTask = async () => {
				try {
					await axios.put(`/api/v1/tasks/${draggableId}`, {
						status: titles[dInd],
					});
					setUpdate(update + 1);
				} catch (error) {
					console.log(`PUT task error: ${error.message}`);
					setErr('Uh oh. Check your Internet and refresh.');
				}
			};

			updateTask();

			const result = move(state[sInd], state[dInd], source, destination);
			const newState = [...state];

			newState[sInd] = result[sInd];
			newState[dInd] = result[dInd];

			setState(newState);
		}
	};

	const onEditClick = (id) => {
		setCurrent(id);
		setEdit(true);
	};

	return (
		<div>
			<div className="Tasks-Kanban">
				<DragDropContext onDragEnd={onDragEnd}>
					{state.map((el, ind) => (
						<div className="Tasks-Kanban-col">
							<h2>{titles[ind]}</h2>
							<Droppable key={ind} droppableId={`${ind}`}>
								{(provided, snapshot) => (
									<div
										className="Tasks-Kanban-list"
										ref={provided.innerRef}
										{...provided.droppableProps}>
										{el.map((item, index) => {
											let time = 0;
											item.timelog.map((el) => (time += parseInt(el[1])));

											return (
												<Draggable
													key={item._id}
													draggableId={item._id}
													index={index}>
													{(provided, snapshot) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															style={getItemStyle(
																snapshot.isDragging,
																provided.draggableProps.style
															)}>
															<div
																className="flex"
																style={{ marginBottom: '8px' }}>
																{item.name}
																<FaPencilAlt
																	className="Tasks-Kanban-edit-btn"
																	onClick={() => onEditClick(item._id)}
																/>
															</div>

															<small>{item.description}</small>

															<div
																className="grey flex"
																style={{ justifyContent: 'left' }}>
																<div className="Tasks-Kanban-tag">
																	<AiFillClockCircle
																		style={{
																			marginRight: '3px',
																			fontSize: '8px',
																		}}
																	/>
																	{time} hrs
																</div>

																<div className="Tasks-Kanban-tag">
																	<AiFillTag
																		style={{
																			marginRight: '3px',
																			fontSize: '8px',
																		}}
																	/>
																	{item.tag.name}
																</div>

																<div className="Tasks-Kanban-tag">
																	<AiFillCalendar
																		style={{
																			marginRight: '3px',
																			fontSize: '8px',
																		}}
																	/>
																	{convertDate(item.due)}
																</div>
															</div>
														</div>
													)}
												</Draggable>
											);
										})}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</div>
					))}
				</DragDropContext>
			</div>

			<p>{err}</p>
		</div>
	);
}

export default Kanban;
