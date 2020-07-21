// @ts-check
'use strict';

import React from 'react';
import FooterBar from './children/FooterBar';
import Graph from './children/Graph';
import Habits from './children/Habits';
import Header from './children/Header';
import Tasks from './children/Tasks';
import Timesheet from './children/Timesheet';

function Dashboard() {
	// Placeholder data
	const taskData = [
		{
			name: 'Complete biology lab report',
			epic: 'SCH-01',
			type: 'progress',
			due: '05/11/20',
		},
		{
			name: 'Take the Rufus to the vet',
			epic: 'HME-05	',
			type: 'progress',
			due: '05/05/20',
		},
		{
			name: 'Build a cool web app',
			epic: 'PJT-24',
			type: 'progress',
			due: '05/20/20',
		},
		{
			name: 'Midterm exam',
			epic: 'SCH-08',
			type: 'todo',
			due: '05/30/20',
		},
		{
			name: 'Buy a new dishwasher',
			epic: 'HME-01	',
			type: 'todo',
			due: '05/05/20',
		},
		{
			name: "Mulch grandma's flower bed",
			epic: 'HME-04',
			type: 'todo',
			due: '05/25/20',
		},
		{
			name: 'Office hours with Dr. Angela',
			epic: 'SCH-02',
			type: 'paused',
			due: '05/15/20',
		},
		{
			name: 'Play date with Rufus',
			epic: 'HME-04	',
			type: 'paused',
			due: '05/10/20',
		},
		{
			name: 'Study with Levonne',
			epic: 'SCH-01',
			type: 'completed',
			due: '05/01/20',
		},
	];

	return (
		<div className="w-full sm:w-3/4 md:w-3/4 lg:w-5/6 bg-gray-100">
			<Header />
			<div className="flex">
				<Tasks taskData={taskData} />
				<section className="w-2/6 h-full">
					<Timesheet />
					<Graph />
				</section>
				<Habits />
			</div>
			<FooterBar taskData={taskData} />
		</div>
	);
}

export default Dashboard;
