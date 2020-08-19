// @ts-check

import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Icon from '../assets/icon.png';

function Landing() {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="Landing">
			<div className="Landing-ribbon-wrap">
				<div className="Landing-ribbon-text">Beta</div>
			</div>
			<div className="Landing-box">
				<div className="Landing-brand">
					<img src={Icon} alt="clock" />
					<h1>Taskaholic</h1>
				</div>
				<h2>Individual task and time tracking for productivity fanatics.</h2>
				{toggle ? (
					<Login toggle={toggle} setToggle={setToggle} />
				) : (
					<Signup toggle={toggle} setToggle={setToggle} />
				)}
			</div>
		</div>
	);
}

export default Landing;
