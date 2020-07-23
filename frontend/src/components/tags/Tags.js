// @ts-check

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './children/Create';
import List from './children/List';
import Edit from './children/Edit';

function Tags() {
	const [toggle, setToggle] = useState('List');
	const [tags, setTags] = useState([]);
	const [current, setCurrent] = useState('');

	useEffect(() => {
		const getTags = async () => {
			const { data } = await axios.get('/api/v1/tags');
			setTags(data.data);
		};

		getTags();
	}, [toggle]);

	if (toggle === 'List') {
		return (
			<div>
				<List setToggle={setToggle} tags={tags} setCurrent={setCurrent} />
			</div>
		);
	} else if (toggle === 'Edit') {
		return (
			<div>
				<Edit setToggle={setToggle} tags={tags} current={current} />
			</div>
		);
	} else if (toggle === 'Create') {
		return (
			<div>
				<Create setToggle={setToggle} />
			</div>
		);
	}
}

export default Tags;
