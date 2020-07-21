import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import LandingSvg from '../assets/landing.svg';
import Icon from '../assets/icon.png';

function Landing() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex flex-wrap items-center h-screen">
      <div className="w-full md:w-1/2 lg:w-3/4 bg-indigo-400 rounded-r-full">
        <img src={LandingSvg} alt="Person looking at tasks" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-8">
        <div>
          <div className="flex items-center">
            <img style={{ width: '40px' }} src={Icon} alt="clock" />
            <h1 className="text-4xl font-black">Taskaholic</h1>
          </div>
          <h2 className="mb-5">
            Individual task and time tracking for productivity fanatics.
          </h2>
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
