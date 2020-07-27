// @ts-check

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaTag } from 'react-icons/fa';

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
		<div className="Tags-edit">
			<form onSubmit={handleSubmit}>
				<div>
					<FaTag style={{ marginRight: '8px', color: '#007aff' }} />
					<input
						type="text"
						maxLength={15}
						minLength={6}
						required={true}
						value={name}
						className="Tags-edit-name"
						onChange={(e) => setName(e.target.value.toUpperCase())}
					/>
				</div>

				<textarea
					maxLength={500}
					minLength={1}
					required={true}
					value={desc}
					className="Tags-edit-desc"
					onChange={(e) => setDesc(e.target.value)}></textarea>

				<div>
					<select
						required={true}
						value={stat}
						className="Tags-edit-status"
						onChange={(e) => setStat(e.target.value)}>
						<option value="To Do">To Do</option>
						<option value="In Progress">In Progress</option>
						<option value="Paused">Paused</option>
						<option value="Completed">Completed</option>
					</select>
					<DatePicker
						selected={due}
						onChange={(d) => setDue(d)}
						className="Tags-edit-date"
					/>
				</div>

				<span>
					<button className="red-btn" onClick={handleDelete}>
						Delete
					</button>
					<button className="blue-btn" type="submit">
						Save & Close
					</button>
				</span>
			</form>

			<p className="red">{err}</p>
		</div>
	);
}

export default Edit;
