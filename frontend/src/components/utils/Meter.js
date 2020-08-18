// @ts-check

import React from 'react';

function Meter({ arr }) {
	// Use CSS in JS instead index.css classes
	let todo = 0;
	let progress = 0;
	let paused = 0;
	let completed = 0;

	arr.map((el) => {
		if (el.status === 'To Do') {
			return todo++;
		} else if (el.status === 'In Progress') {
			return progress++;
		} else if (el.status === 'Paused') {
			return paused++;
		} else if (el.status === 'Completed') {
			return completed++;
		} else {
			return 0;
		}
	});

	let total = todo + progress + paused + completed;
	todo *= 100 / total;
	progress *= 100 / total;
	paused *= 100 / total;
	completed *= 100 / total;

	const meterStyle = {
		width: '100%',
		height: '16px',
		borderRadius: '8px',
		background: 'var(--gradient-grey-lin)',
		display: 'flex',
		boxShadow: 'var(--box-shadow-inner)',
	};
	const todoStyle = {
		width: `${todo}%`,
		height: '16px',
		borderRadius: '0px',
		background: 'var(--gradient-red-lin)',
	};
	const progressStyle = {
		width: `${progress}%`,
		height: '16px',
		borderRadius: '0px',
		background: 'var(--gradient-blue-lin)',
	};
	const completedStyle = {
		width: `${completed}%`,
		height: '16px',
		borderRadius: '0px',
		background: 'var(--gradient-green-lin)',
	};

	// border radius: top left, top right, bottom right, bottom left
	if (todo > 0 && progress > 0 && completed > 0 && paused > 0) {
		todoStyle.borderRadius = '8px 0px 0px 8px';
		completedStyle.borderRadius = '0px 0px 0px 0px';
	} else if (todo > 0 && progress > 0 && completed > 0) {
		todoStyle.borderRadius = '8px 0px 0px 8px';
		completedStyle.borderRadius = '0px 8px 8px 0px';
	} else if (todo > 0 && progress > 0 && paused > 0) {
		todoStyle.borderRadius = '8px 0px 0px 8px';
		progressStyle.borderRadius = '0px 0px 0px 0px';
	} else if (todo > 0 && progress > 0) {
		todoStyle.borderRadius = '8px 0px 0px 8px';
		progressStyle.borderRadius = '0px 8px 8px 0px';
	} else if (todo > 0 && completed > 0 && paused > 0) {
		todoStyle.borderRadius = '8px 0px 0px 8px';
		completedStyle.borderRadius = '0px 0px 0px 0px';
	} else if (todo > 0 && completed > 0) {
		todoStyle.borderRadius = '8px 0px 0px 8px';
		completedStyle.borderRadius = '0px 8px 8px 0px';
	} else if (todo > 0 && paused > 0) {
		todoStyle.borderRadius = '8px 0px 0px 8px';
	} else if (todo > 0) {
		todoStyle.borderRadius = '8px 8px 8px 8px';
	} else if (progress > 0 && completed > 0 && paused > 0) {
		progressStyle.borderRadius = '8px 0px 0px 8px';
		completedStyle.borderRadius = '0px 0px 0px 0px';
	} else if (progress > 0 && completed > 0) {
		progressStyle.borderRadius = '8px 0px 0px 8px';
		completedStyle.borderRadius = '0px 8px 8px 0px';
	} else if (progress > 0 && paused > 0) {
		progressStyle.borderRadius = '8px 0px 0px 8px';
	} else if (progress > 0) {
		progressStyle.borderRadius = '8px 8px 8px 8px';
	} else if (completed > 0 && paused > 0) {
		completedStyle.borderRadius = '8px 0px 0px 8px';
	} else if (completed > 0) {
		completedStyle.borderRadius = '8px 8px 8px 8px';
	}

	return (
		<div style={meterStyle}>
			<div style={todoStyle}></div>
			<div style={progressStyle}></div>
			<div style={completedStyle}></div>
		</div>
	);
}

export default Meter;
