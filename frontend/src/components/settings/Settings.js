import React, { useContext } from 'react';
import { UserContext } from '../../context/User';

function Settings() {
  const { logout } = useContext(UserContext);

  return (
    <div className="w-full sm:w-3/4 md:w-3/4 lg:w-5/6">
      <h1>Settings</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Settings;
