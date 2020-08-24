// @ts-check

import React, { useState } from 'react';
import { RiCheckboxMultipleFill } from 'react-icons/ri';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

function Landing() {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="Landing">
			<div className="Landing-ribbon-wrap">
				<div className="Landing-ribbon-text">Beta</div>
			</div>
			<div className="Landing-form">
				<div className="Landing-brand">
					<RiCheckboxMultipleFill size={'2.5em'} className="Menu-brand" />
					<h1
						style={{
							fontFamily: `Shrikhand`,
						}}>
						Taskaholic
					</h1>
				</div>
				<h2>
					Individual task and time tracking built for productivity fanatics.
					<br />
				</h2>
				{toggle ? (
					<Login toggle={toggle} setToggle={setToggle} />
				) : (
					<Signup toggle={toggle} setToggle={setToggle} />
				)}
				<strong style={{ marginTop: '50px' }}>100% free for Beta users.</strong>
			</div>
			<div className="Landing-img" />
		</div>
	);
}

export default Landing;
