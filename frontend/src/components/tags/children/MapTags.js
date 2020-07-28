// @ts-check

import React from 'react';
import { FaTag } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import convertDate from '../../utils/convertDate';
import colorFromName from '../../utils/colorFromName';

function MapTags({ tags, name, handleTagClick }) {
	tags.sort((a, b) => (a.due > b.due ? 1 : -1));

	return tags.length > 0 ? (
		<div className="Tags-list">
			<h2 className={colorFromName(name)}>{name}</h2>

			<div>
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
							<span className="Tags-list-item-meta">
								<FiClock style={{ marginRight: '3px', fontSize: '10px' }} />
								{convertDate(tag.due)}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	) : null;
}

export default MapTags;
