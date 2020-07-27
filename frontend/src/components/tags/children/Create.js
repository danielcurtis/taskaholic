// @ts-nocheck

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Create({ setToggle }) {
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

			setToggle('List');
		} catch (error) {
			console.log(`Create tag error: ${error.message}`);
			setErr('Uh oh... please check your Internet and try again.');
		}
	};

	return (
		<div className="Tags-create">
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input
					type="text"
					maxLength={15}
					minLength={3}
					required={true}
					value={name}
					onChange={(e) => setName(e.target.value.toUpperCase())}></input>

				<label>Due:</label>
				<DatePicker selected={due} onChange={(d) => setDue(d)} />

				<label>Description:</label>
				<textarea
					required={true}
					maxLength={500}
					value={desc}
					onChange={(e) => setDesc(e.target.value)}></textarea>

				<label>Status:</label>
				<select
					required={true}
					value={stat}
					onChange={(e) => setStat(e.target.value)}>
					<option value="To Do">To Do</option>
					<option value="In Progress">In Progress</option>
					<option value="Paused">Paused</option>
					<option value="Completed">Completed</option>
				</select>
				<span>
					<button onClick={() => setToggle('List')}>Cancel</button>
					<button className="blue-btn" type="submit">
						Create Tag
					</button>
				</span>
			</form>
			<p className="red">{err}</p>
		</div>
	);
}

export default Create;
