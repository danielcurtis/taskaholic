// @ts-check

import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import LandingSvg from '../assets/landing.svg';
import Icon from '../assets/icon.png';

function Landing() {
	const [toggle, setToggle] = useState(true);

	return (
		<div>
			<div>
				<img src={LandingSvg} alt="Person looking at tasks" />
			</div>
			<div>
				<div>
					<div>
						<img style={{ width: '40px' }} src={Icon} alt="clock" />
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
		</div>
	);
}

export default Landing;
