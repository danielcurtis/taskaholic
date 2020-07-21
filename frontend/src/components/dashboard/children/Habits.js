// @ts-check
'use strict';

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
		<section className="w-1/6 h-full flex flex-col items-center">
			{habitData.map((el, i) => {
				return (
					<div
						key={i}
						className="rounded-full h-32 w-32 bg-indigo-700 text-center pb-5 pt-4 mb-10 text-owl-blu shadow-inner">
						<h2 className="text-5xl">{el.days}</h2>
						<h3 className="text-xs text-white">{el.name.toUpperCase()}</h3>
					</div>
				);
			})}
		</section>
	);
}

export default Habits;
