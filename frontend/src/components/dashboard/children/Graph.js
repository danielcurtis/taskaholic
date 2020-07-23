// @ts-check

import React from 'react';

function Graph() {
	// Placeholder data
	const graphData = [
		{
			val: 8,
			date: '04/13/2020',
		},
		{
			val: 1,
			date: '04/14/2020',
		},
		{
			val: 5,
			date: '04/15/2020',
		},
		{
			val: 13,
			date: '04/16/2020',
		},
		{
			val: 1,
			date: '04/17/2020',
		},
		{
			val: 5,
			date: '04/18/2020',
		},
		{
			val: 3,
			date: '04/19/2020',
		},
	];

	// Find highest value
	const max = Math.max.apply(
		Math,
		graphData.map((o) => o.val)
	);

	// Calulate height
	const findHeight = (curr) => curr * (200 / max);

	// Set color class
	const findColor = (curr) => {
		if (findHeight(curr) > 100) return 'bg-owl-grn';
		else if (findHeight(curr) > 50) return 'bg-owl-tan';
		else return 'bg-red-400';
	};

	return (
		<div>
			<h2>Scores by Day</h2>
			<div>
				{graphData.map((el, i) => {
					return (
						<div
							key={i}
							style={{ height: findHeight(el.val), width: `20px` }}
							className={`${findColor(
								el.val
							)} rounded-t text-xs text-center mx-2 text-blue-800`}>
							{el.val}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Graph;
