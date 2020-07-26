// @ts-check

import React, { useState, useEffect } from 'react';

function Meter({ tasks }) {
	// Use CSS in JS instead index.css classes
	let todo = 0;
	let progress = 0;
	let paused = 0;
	let completed = 0;

	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i].status === 'To Do') todo++;
		else if (tasks[i].status === 'In Progress') progress++;
		else if (tasks[i].status === 'Paused') paused++;
		else if (tasks[i].status === 'Completed') completed++;
	}

	let total = todo + progress + paused + completed;
	todo *= 100 / total;
	progress *= 100 / total;
	paused *= 100 / total;
	completed *= 100 / total;

	console.log(todo, progress, paused, completed, total);

	const meterStyle = {
		width: '100%',
		height: '20px',
		borderRadius: '8px',
		background: '#36456b',
	};
	const todoStyle = {
		width: `${todo}%`,
		background: '#ec1416',
		borderRadius: '8px 0 0 8px',
	};
	const progressStyle = {
		width: `${progress}%`,
		background: '#007aff',
	};
	const completedStyle = {
		width: `${completed}%`,
		background: '#58d188',
	};

	return (
		<div style={meterStyle}>
			<div style={todoStyle} />
			<div style={progressStyle} />
			<div style={completedStyle} />
		</div>
	);
}

export default Meter;
