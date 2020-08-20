import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Form({ name, setName, desc, setDesc, due, setDue, stat, setStat }) {
	return (
		<>
			<label>Name:</label>
			<br />
			<input
				type="text"
				maxLength={15}
				minLength={6}
				required={true}
				value={name}
				onChange={(e) => setName(e.target.value.toUpperCase())}
			/>
			<br />

			<label>Description:</label>
			<br />
			<textarea
				maxLength={500}
				minLength={1}
				required={true}
				value={desc}
				onChange={(e) => setDesc(e.target.value)}></textarea>
			<br />

			<label>Due:</label>
			<br />
			<DatePicker required={true} selected={due} onChange={(d) => setDue(d)} />
			<br />

			<label>Status:{` `}</label>
			<select
				required={true}
				value={stat}
				onChange={(e) => setStat(e.target.value)}>
				<option value="To Do">To Do</option>
				<option value="In Progress">In Progress</option>
				<option value="Paused">Paused</option>
				<option value="Completed">Completed</option>
			</select>
			<br />
		</>
	);
}

export default Form;
