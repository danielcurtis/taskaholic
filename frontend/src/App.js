// @ts-check

import React, { useContext, useEffect } from 'react';
import { UserContext } from './context/User';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
	const { user } = useContext(UserContext);

	return user.auth ? <Home /> : <Landing />;
}

export default App;
