// @ts-check

import React, { useState } from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import Tags from '../components/tags/Tags';
import Habits from '../components/habits/Habits';
import Menu from '../components/menu/Menu';
import Settings from '../components/settings/Settings';
import Tasks from '../components/tasks/Tasks';

function Home() {
	// Init view & component
	const [view, setView] = useState('Dashboard');
	let component = <Dashboard />;

	// Set view, similar to React Router
	if (view === 'Dashboard') {
		component = <Dashboard />;
	} else if (view === 'Tags') {
		component = <Tags />;
	} else if (view === 'Habits') {
		component = <Habits />;
	} else if (view === 'Settings') {
		component = <Settings />;
	} else if (view === 'Tasks') {
		component = <Tasks />;
	}

	return (
		<div>
			<Menu setView={setView} />
			<main className="Main">{component}</main>
		</div>
	);
}

export default Home;
