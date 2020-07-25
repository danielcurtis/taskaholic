// @ts-check

import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from './context/User';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
	const { user } = useContext(UserContext);

	useEffect(() => {
		const getCsrfToken = async () => {
			const { data } = await axios.get('/api/v1/auth/csrf-token');
			axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
			axios.defaults.headers.put['X-CSRF-Token'] = data.csrfToken;
			axios.defaults.headers.delete['X-CSRF-Token'] = data.csrfToken;
		};
		getCsrfToken();
	}, []);

	return user.auth ? <Home /> : <Landing />;
}

export default App;
