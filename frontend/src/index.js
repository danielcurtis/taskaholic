// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './context/User';
import './index.css';
import './components/dashboard/dashboard.css';

ReactDOM.render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>{' '}
	</React.StrictMode>,
	document.getElementById('root')
);
