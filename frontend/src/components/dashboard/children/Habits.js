// @ts-check

import React from 'react';

function Habits() {
	// Placeholder data
	const habitData = [
		{
			days: 14,
			name: 'Water',
		},
		{
			days: 13,
			name: 'Meditate',
		},
		{
			days: 8,
			name: 'Code 1hr',
		},
		{
			days: 2,
			name: 'Yoga',
		},
	];

	return (
		<section>
			{habitData.map((el, i) => {
				return (
					<div key={i}>
						<h2>{el.days}</h2>
						<h3>{el.name.toUpperCase()}</h3>
					</div>
				);
			})}
		</section>
	);
}

export default Habits;
