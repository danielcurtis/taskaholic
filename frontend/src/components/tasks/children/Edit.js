// @ts-check

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Edit({ setToggle, tasks, current }) {
	let task = tasks.find((el) => el._id === current);

	const [name, setName] = useState(task.name);
	const [due, setDue] = useState(new Date(task.due));
	const [time, setTime] = useState(task.timelog);
	const [desc, setDesc] = useState(task.description);
	const [stat, setStat] = useState(task.status);
	const [err, setErr] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let arr = [...time];
			arr = arr.filter((el) => el[1] != 0);

			await axios.put(`/api/v1/tasks/${current}`, {
				name: name,
				due: due,
				timelog: arr,
				description: desc,
				status: stat,
			});
			setToggle('List');
		} catch (error) {
			console.log(`Edit task error: ${error.message}`);
			setErr('Uh oh. Check your Internet and refresh.');
		}
	};

	const handleDelete = async (e) => {
		e.preventDefault();

		try {
			await axios.delete(`/api/v1/tasks/${current}`);
			setToggle('List');
		} catch (error) {
			console.log(`Delete task error: ${error.message}`);
			setErr('Uh oh. Check your Internet and refresh.');
		}
	};

	const handleTimeClick = () => {
		let arr = [...time];
		arr.push([new Date(), 0]);
		setTime(arr);
	};

	const handleHourChange = (i) => (e) => {
		let arr = [...time];
		arr[i] = [arr[i][0], e.target.value];
		setTime(arr);
	};

	const handleDateChange = (date, i) => {
		let arr = [...time];
		arr[i] = [date, arr[i][1]];

		for (let i = 0; i < arr.length - 1; i++) {
			let oldDate = new Date(arr[i][0]).toDateString();
			let newDate = new Date(date).toDateString();

			if (oldDate === newDate) {
				return setErr('Enter a unique date or edit old entry.');
			}
		}

		return setTime(arr);
	};

	return (
		<div>
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

				<label>Timelog</label>
				{time.map((el, i) => {
					return (
						<div key={i}>
							<label>Time:</label>
							<DatePicker
								selected={new Date(time[i][0])}
								onChange={(date) => handleDateChange(date, i)}
							/>
							<input value={time[i][1]} onChange={handleHourChange(i)}></input>
						</div>
					);
				})}

				<input type="submit" value="Submit"></input>
			</form>

			<button onClick={handleTimeClick}>New time log</button>

			<button onClick={handleDelete}>Delete</button>

			<p style={{ color: '#ec1416' }}>{err}</p>
		</div>
	);
}

export default Edit;
