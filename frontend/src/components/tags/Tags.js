// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tag from './children/Tag';
import Create from './children/Create';
import Edit from './children/Edit';

function Tags() {
	const [tags, setTags] = useState([]);
	const [edit, setEdit] = useState(false);
	const [create, setCreate] = useState(false);
	const [current, setCurrent] = useState('');
	const [update, setUpdate] = useState(0);

	useEffect(() => {
		const getTags = async () => {
			const { data } = await axios.get('/api/v1/tags');
			setTags(data.data);
		};

		getTags();
	}, [update]);

	return (
		<div className="Tags">
			<div className="flex">
				<h1
					style={{
						fontFamily: `Shrikhand`,
					}}>
					Tags
				</h1>
				<button onClick={() => setCreate(true)}>Create Tag</button>
			</div>

			<div>
				{tags.map((tag) => (
					<Tag
						key={tag.id}
						tag={tag}
						setEdit={setEdit}
						setCurrent={setCurrent}
					/>
				))}
			</div>
			{create ? (
				<Create setCreate={setCreate} update={update} setUpdate={setUpdate} />
			) : null}
			{edit ? (
				<Edit
					tags={tags}
					setEdit={setEdit}
					current={current}
					update={update}
					setUpdate={setUpdate}
				/>
			) : null}
		</div>
	);

	// if (toggle === 'List') {
	// 	return (
	// 		<div>
	// 			<List setToggle={setToggle} tags={tags} setCurrent={setCurrent} />
	// 		</div>
	// 	);
	// } else if (toggle === 'Edit') {
	// 	return (
	// 		<div>
	// 			<Edit setToggle={setToggle} tags={tags} current={current} />
	// 		</div>
	// 	);
	// } else if (toggle === 'Create') {
	// 	return (
	// 		<div>
	// 			<Create setToggle={setToggle} />
	// 		</div>
	// 	);
	// }
}

export default Tags;
