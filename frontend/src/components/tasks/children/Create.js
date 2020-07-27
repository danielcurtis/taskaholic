// @ts-nocheck

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Create({ setToggle }) {
	const [tags, setTags] = useState([]);
	const [tag, setTag] = useState('Select a value');
	const [name, setName] = useState('');
	const [due, setDue] = useState('');
	const [desc, setDesc] = useState('');
	const [stat, setStat] = useState('To Do');
	const [err, setErr] = useState('');

	useEffect(() => {
		const getTags = async () => {
			const { data } = await axios.get('/api/v1/tags');

			if (data.data.length === 0) {
				setErr('Create a tag before creating a task.');
			} else {
				setStat('To Do');
				setTags(data.data);
			}
		};

		getTags();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.post(`/api/v1/tags/${tag}/tasks`, {
				name: name,
				due: due,
				timelog: [],
				description: desc,
				status: stat,
			});

			setToggle('List');
		} catch (error) {
			console.log(`Create task error: ${error.message}`);
			setErr('Uh oh. Refresh and try again.');
		}
	};

	return (
		<div className="Tags-create">
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					type="text"
					required={true}
					value={name}
					onChange={(e) => setName(e.target.value)}></input>

				<label>Due</label>
				<DatePicker selected={due} onChange={(d) => setDue(d)} />

				<label>Description</label>
				<textarea
					required={true}
					value={desc}
					onChange={(e) => setDesc(e.target.value)}></textarea>

				<label>Tag</label>
				<select value={tag} onChange={(e) => setTag(e.target.value)}>
					<option hidden>Select a value</option>
					{tags.map((el) => (
						<option key={el.id} value={el.id}>
							{el.name}
						</option>
					))}
				</select>

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

				<span>
					<button onClick={() => setToggle('List')}>Cancel</button>
					<button className="blue-btn" type="submit">
						Create Task
					</button>
				</span>
			</form>

			<p className="red">{err}</p>
		</div>
	);
}

export default Create;
