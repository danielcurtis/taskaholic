// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/User';
import './index.css';
import './components/dashboard/dashboard.css';
import './components/tasks/tasks.css';
import './components/tags/tags.css';
import './components/habits/habits.css';

ReactDOM.render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>{' '}
	</React.StrictMode>,
	document.getElementById('root')
);
