// @ts-check

import React from 'react';

function List({ setToggle, tags, setCurrent }) {
	const handleTagClick = (id) => {
		setCurrent(id);
		setToggle('Edit');
	};

	if (tags === undefined) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<h1>List</h1>

				<ul>
					{tags.map((tag) => (
						<li key={tag.name} onClick={() => handleTagClick(tag.id)}>
							<span>{tag.name}</span>
							<span>{tag.due}</span>
							<span>{tag.status}</span>
							<span>{tag.tasks.length}</span>
						</li>
					))}
				</ul>

				<button onClick={() => setToggle('Create')}>Create New Item</button>
			</div>
		);
	}
}

export default List;
