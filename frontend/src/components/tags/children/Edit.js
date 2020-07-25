// @ts-check

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Edit({ setToggle, tags, current }) {
	let tag = tags.find((el) => el.id === current);

	const [name, setName] = useState(tag.name);
	const [due, setDue] = useState(new Date(tag.due));
	const [desc, setDesc] = useState(tag.description);
	const [stat, setStat] = useState(tag.status);
	const [err, setErr] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.put(`/api/v1/tags/${current}`, {
				name: name,
				due: due,
				description: desc,
				status: stat,
			});
			setToggle('List');
		} catch (error) {
			console.log(`Edit tag error: ${error.message}`);
			setErr('Uh oh... please check your Internet and try again.');
		}
	};

	const handleDelete = async (e) => {
		e.preventDefault();

		try {
			await axios.delete(`/api/v1/tags/${current}`);
			setToggle('List');
		} catch (error) {
			console.log(`Delete tag error: ${error.message}`);
			setErr('Uh oh... please check your Internet and try again.');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					maxLength={6}
					minLength={6}
					required={true}
					value={name}
					onChange={(e) => setName(e.target.value.toUpperCase())}></input>

				<label>Due</label>
				<DatePicker selected={due} onChange={(d) => setDue(d)} />

				<label>Description</label>
				<textarea
					required={true}
					value={desc}
					onChange={(e) => setDesc(e.target.value)}></textarea>

				<label>Status</label>
				<select
					required={true}
					value={stat}
					onChange={(e) => setStat(e.target.value)}>
					<option value="To Do">To Do</option>
					<option value="In Progress">In Progress</option>
					<option value="Paused">Paused</option>
					<option value="Completed">Completed</option>
				</select>

				<input type="submit" value="Submit"></input>
			</form>

			<button onClick={handleDelete}>Delete</button>

			<p>{err}</p>
		</div>
	);
}

export default Edit;
