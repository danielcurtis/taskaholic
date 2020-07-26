// @ts-check

import React, { useContext } from 'react';
import { UserContext } from '../../../context/User';

function Header() {
	// Placeholder user
	const user = useContext(UserContext);
	const name = user.user.data.name;

	// Init month names, date, greeting
	const months = [
		'JANUARY',
		'FEBRUARY',
		'MARCH',
		'APRIL',
		'MAY',
		'JUNE',
		'JULY',
		'AUGUST',
		'SEPTEMBER',
		'OCTOBER',
		'NOVEMBER',
		'DECEMBER',
	];
	const date = new Date();
	let greeting = 'Good morning,';

	// Set greeting based on time
	if (date.getHours() < 12) greeting = 'Good morning,';
	else if (date.getHours() < 17) greeting = 'Good afternoon,';
	else greeting = 'Good evening,';

	return (
		<header className="Dashboard-header">
			<h1
				style={{
					fontFamily: `Shrikhand, cursive`,
				}}>{`${greeting} ${name}`}</h1>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<span>{months[date.getMonth()]}</span>
				<h1
					style={{
						fontFamily: `Shrikhand, cursive`,
						margin: 'auto 10px',
					}}>
					{date.getDate()}
				</h1>
				<span>{date.getFullYear()}</span>
			</div>
		</header>
	);
}

export default Header;
