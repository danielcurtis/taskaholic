// @ts-check

import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Edit({ tasks, setEdit, current, update, setUpdate }) {
	let task = tasks.find((el) => el._id === current);

	// Get inital total hours
	let initTotal = 0;
	task.timelog.map((el) => (initTotal += parseInt(el[1])));

	const [name, setName] = useState(task.name);
	const [due, setDue] = useState(new Date(task.due));
	const [time, setTime] = useState(task.timelog);
	const [total, setTotal] = useState(initTotal);
	const [desc, setDesc] = useState(task.description);
	const [stat, setStat] = useState(task.status);
	const [err, setErr] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			let arr = [...time];
			arr = arr.filter((el) => el[1] !== 0 || el[1] !== '0');

			await axios.put(`/api/v1/tasks/${current}`, {
				name: name,
				due: due,
				timelog: arr,
				description: desc,
				status: stat,
			});

			setUpdate(update + 1);
			setEdit(false);
		} catch (error) {
			console.log(`Edit task error: ${error.message}`);
			setErr('Uh oh. Check your Internet and refresh.');
		}
	};

	const handleDelete = async (e) => {
		e.preventDefault();

		try {
			await axios.delete(`/api/v1/tasks/${current}`);
			setEdit(false);
			setUpdate(update + 1);
		} catch (error) {
			console.log(`Delete task error: ${error.message}`);
			setErr('Uh oh. Check your Internet and refresh.');
		}
	};

	const handleTimeClick = (e) => {
		e.preventDefault();

		let arr = [...time];
		let tot = 0;
		arr.push([new Date(), 0]);
		arr.map((i) => (tot += parseInt(i[1])));

		setTime(arr);
		setTotal(tot);
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
		<div className="Tasks-Edit">
			<div className="Tasks-Edit-form">
				<form onSubmit={handleSubmit}>
					<label>Name:</label>
					<br />
					<input
						type="text"
						required={true}
						value={name}
						className="Tasks-Edit-name"
						onChange={(e) => setName(e.target.value)}
					/>
					<br />

					<label>Description:</label>
					<br />
					<textarea
						required={true}
						maxLength={500}
						minLength={1}
						value={desc}
						className="Tasks-Edit-desc"
						onChange={(e) => setDesc(e.target.value)}
					/>
					<br />

					<div>
						<select
							required={true}
							value={stat}
							className="Tasks-Edit-status"
							onChange={(e) => setStat(e.target.value)}>
							<option value="To Do">To Do</option>
							<option value="In Progress">In Progress</option>
							<option value="Paused">Paused</option>
							<option value="Completed">Completed</option>
						</select>
						<DatePicker
							selected={due}
							onChange={(d) => setDue(d)}
							className="Tasks-Edit-date"
						/>
					</div>

					<div className="Tasks-Edit-timelog">
						<strong
							style={{ color: '#36456b' }}>{`${total} hours logged`}</strong>

						{time.map((el, i) => {
							return (
								<div key={i}>
									<input value={time[i][1]} onChange={handleHourChange(i)} />{' '}
									<DatePicker
										selected={new Date(time[i][0])}
										onChange={(date) => handleDateChange(date, i)}
									/>
								</div>
							);
						})}
					</div>

					<div style={{ textAlign: 'right' }}>
						<button className="red-btn" onClick={handleDelete}>
							Delete
						</button>
						{` `}
						<button onClick={handleTimeClick}>Log Time</button>
						{` `}
						<button className="blue-btn" type="submit">
							Save & Close
						</button>
					</div>
				</form>

				<p className="red">{err}</p>
			</div>
		</div>
	);
}

export default Edit;
