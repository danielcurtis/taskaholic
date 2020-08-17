// @ts-nocheck

import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';

function Create({ setCreate, update, setUpdate }) {
	const [name, setName] = useState('');
	const [due, setDue] = useState(new Date());
	const [desc, setDesc] = useState('');
	const [stat, setStat] = useState('To Do');
	const [err, setErr] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post('/api/v1/tags', {
				name: name,
				due: due,
				description: desc,
				status: stat,
			});
			setUpdate(update + 1);
			setCreate(false);
		} catch (error) {
			console.log(`Create tag error: ${error.message}`);
			setErr('Uh oh... please check your Internet and try again.');
		}
	};

	return (
		<div className="Tags-Edit">
			<div className="Tags-Edit-form">
				<form onSubmit={handleSubmit}>
					<Form
						name={name}
						setName={setName}
						desc={desc}
						setDesc={setDesc}
						due={due}
						setDue={setDue}
						stat={stat}
						setStat={setStat}
					/>

					<div style={{ textAlign: 'right' }}>
						<button onClick={() => setCreate(false)}>Cancel</button>
						{` `}
						<button className="blue-btn" type="submit">
							Create Tag
						</button>
					</div>
				</form>
				<p className="red">{err}</p>
			</div>
		</div>
	);
}

export default Create;
