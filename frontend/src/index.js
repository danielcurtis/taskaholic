// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import { UserProvider } from './context/User';
import './index.css';

const getCsrfToken = async () => {
	const { data } = await axios.get('/api/v1/auth/csrf-token');
	axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
	axios.defaults.headers.put['X-CSRF-Token'] = data.csrfToken;
	axios.defaults.headers.delete['X-CSRF-Token'] = data.csrfToken;
};

getCsrfToken();

ReactDOM.render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
