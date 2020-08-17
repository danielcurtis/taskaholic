// @ts-check

import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';

function Edit({ tags, setEdit, current, update, setUpdate }) {
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
			setEdit(false);
			setUpdate(update + 1);
		} catch (error) {
			console.log(`Edit tag error: ${error.message}`);
			setErr('Uh oh... please check your Internet and try again.');
		}
	};

	const handleDelete = async (e) => {
		e.preventDefault();

		try {
			await axios.delete(`/api/v1/tags/${current}`);
			setEdit(false);
			setUpdate(update + 1);
		} catch (error) {
			console.log(`Delete tag error: ${error.message}`);
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
						<button className="red-btn" onClick={handleDelete}>
							Delete
						</button>
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
