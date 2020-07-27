// @ts-check

import React from 'react';
import { FaTag } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';

function List({ setToggle, tags, setCurrent }) {
	const convertDate = (d) => {
		let date = new Date(d);
		return (
			(date.getMonth() > 8
				? date.getMonth() + 1
				: '0' + (date.getMonth() + 1)) +
			'/' +
			(date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
			'/' +
			date.getFullYear()
		);
	};

	const handleTagClick = (id) => {
		setCurrent(id);
		setToggle('Edit');
	};

	if (tags === undefined) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<div className="flex">
					<h1>Your Tags</h1>
					<button
						onClick={() => setToggle('Create')}
						style={{ marginLeft: '30px' }}>
						Create Tag
					</button>
				</div>

				<div className="Tags-list">
					{tags.map((tag) => {
						return (
							<div
								className="Tags-list-item"
								onClick={() => handleTagClick(tag.id)}>
								<h2>
									<FaTag style={{ marginRight: '8px', color: '#007aff' }} />{' '}
									{tag.name}
								</h2>
								<p>{tag.description}</p>
								<span className="Tags-list-item-meta">{tag.status}</span>
								<span className="Tags-list-item-meta">
									<FiClock style={{ marginRight: '3px', fontSize: '10px' }} />
									{convertDate(tag.due)}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default List;
