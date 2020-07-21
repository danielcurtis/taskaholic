// @ts-check
'use strict';

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
		<div className="flex mx-10 my-5">
			<header className="flex w-full h-full justify-between mb-5">
				<h1
					className="text-3xl text-owl-grn"
					style={{
						fontFamily: `Shrikhand, cursive`,
					}}>{`${greeting} ${name}`}</h1>
				<div className="flex text-owl-grn">
					<span className="self-center px-1">{months[date.getMonth()]}</span>
					<span className="self-center px-1 text-4xl">{date.getDate()}</span>
					<span className="self-center px-1">{date.getFullYear()}</span>
				</div>
			</header>
		</div>
	);
}

export default Header;
