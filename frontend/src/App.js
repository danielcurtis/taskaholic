// @ts-check

import React, { useContext } from 'react';
import ReactGA from 'react-ga';
import { UserContext } from './context/User';
import Home from './pages/Home';
import Landing from './pages/Landing';

ReactGA.initialize('UA-156011027-2', { testMode: true });
ReactGA.pageview(window.location.pathname);

function App() {
	const { user } = useContext(UserContext);

	return user.auth ? <Home /> : <Landing />;
}

export default App;
