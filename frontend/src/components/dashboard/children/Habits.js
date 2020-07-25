// @ts-check

import React from 'react';

function Habits({ habits }) {
	habits.sort((a, b) => (a.streak < b.streak ? 1 : -1));
	habits = habits.slice(0, 3);

	return (
		<section className="Dashboard-habits">
			{habits.map((el, i) => {
				return (
					<div key={i}>
						<h2>{el.streak}</h2>
						<h3>{el.name.toUpperCase()}</h3>
					</div>
				);
			})}
		</section>
	);
}

export default Habits;
