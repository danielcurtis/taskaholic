// @ts-check

import React, { useState } from 'react';
import Icon from '../../assets/icon.png';

import {
	AiOutlineBarChart,
	AiOutlineCheckCircle,
	AiOutlineClockCircle,
	AiOutlineFolderOpen,
	AiOutlineReconciliation,
	AiOutlineSetting,
} from 'react-icons/ai';

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
	const listCl =
		'px-3 py-2 cursor-pointer flex items-center hover:text-gray-800 hover:font-semibold';
	const activeCl =
		listCl + ' bg-gray-100 shadow-inner text-gray-800 font-semibold';

	const updateactive = (i, el) => {
		setView(el);
		setActive(i);
	};

	return (
		<div>
			<div>
				<img style={{ width: '30px' }} src={Icon} alt="clock" />
				<h1>Taskaholic</h1>
			</div>
			<ul>
				{listData.map((el, i) => {
					console.log();
					return (
						<li
							key={i}
							id={el}
							className={active === i ? activeCl : listCl}
							onClick={() => updateactive(i, el)}>
							<span aria-labelledby={el}>{listIcons[i]}</span>
							{el}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Menu;
