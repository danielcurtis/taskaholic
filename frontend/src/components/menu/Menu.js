// @ts-check

import React, { useState } from 'react';
import {
	HiTemplate,
	HiCheckCircle,
	HiChartBar,
	HiFolder,
	HiCog,
} from 'react-icons/hi';
import Brand from './children/Brand';

function Menu({ setView }) {
	// Top-level components
	const listData = ['Dashboard', 'Tasks', 'Tags', 'Habits'];
	const listIcons = [
		<HiTemplate size={'1.5em'} />,
		<HiCheckCircle size={'1.5em'} />,
		<HiFolder size={'1.5em'} />,
		<HiChartBar size={'1.5em'} />,
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
							{listIcons[i]}
						</li>
					);
				})}
			</ul>
			<HiCog
				size={'1.5em'}
				onClick={() => updateactive(4, 'Settings')}
				className={
					active === 4
						? 'Menu-item-active Menu-settings'
						: 'Menu-item Menu-settings'
				}
			/>
		</div>
	);
}

export default Menu;
