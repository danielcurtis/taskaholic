// @ts-check
'use strict';

import React, { useState } from 'react';
import axios from 'axios';

function ResetPwd({ setPwd }) {
	const [email, setEmail] = useState('');

	const handleReset = async () => {
		try {
			await axios.post('/api/v1/auth/forgotpassword', {
				email: email,
			});
		} catch (err) {
			console.log(`ResetPwd err ${err}`);
		}
	};

	const inputClass =
		'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-2 mt-1';

	return (
		<div>
			<label className="font-medium">Email:</label>
			<input
				className={inputClass}
				type="email"
				placeholder="jane@example.com"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<div className="flex justify-end mt-4">
				<button
					className="bg-owl-grn hover:bg-blue-700 text-white font-bold py-2 px-4 border border-owl-grn hover:border-transparent rounded-lg mr-2"
					onClick={handleReset}>
					Send Email
				</button>
				<button
					className="bg-transparent hover:bg-blue-700 text-owl-grn font-bold hover:text-white py-2 px-4 border border-owl-grn hover:border-transparent rounded-lg"
					onClick={() => setPwd(false)}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default ResetPwd;
