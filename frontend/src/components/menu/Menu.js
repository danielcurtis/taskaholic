// @ts-check

import React, { useState } from 'react';
import {
	AiOutlineBarChart,
	AiOutlineCheckCircle,
	AiOutlineClockCircle,
	AiOutlineFolderOpen,
	AiOutlineReconciliation,
	AiOutlineSetting,
} from 'react-icons/ai';
import Brand from './children/Brand';

function Menu({ setView }) {
	// Top-level components
	const listData = [
		'Dashboard',
		'Tasks',
		'Tags',
		'Habits',
		'Timesheet',
		'Settings',
	];
	const listIcons = [
		<AiOutlineReconciliation />,
		<AiOutlineCheckCircle />,
		<AiOutlineFolderOpen />,
		<AiOutlineBarChart />,
		<AiOutlineClockCircle />,
		<AiOutlineSetting />,
	];

	// Track active component
	// Set class dependant on active
	const [active, setActive] = useState(0);

	const updateactive = (i, el) => {
		setView(el);
		setActive(i);
	};

	return (
		<div className="Menu">
			<Brand />
			<ul>
				{listData.map((el, i) => {
					return (
						<li
							key={i}
							id={el}
							className={active === i ? 'Menu-item-active' : 'Menu-item'}
							onClick={() => updateactive(i, el)}>
							<span aria-labelledby={el}>{listIcons[i]}</span>
							<div>{el}</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Menu;
