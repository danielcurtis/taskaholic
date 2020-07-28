// @ts-check

import React from 'react';
import MapTags from './MapTags';
import {
	toDo,
	inProgress,
	paused,
	completed,
} from '../../utils/filterTasks.js';
import Meter from '../../utils/Meter';

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
				<div className="flex">
					<h1>Your Tags</h1>
					<button
						onClick={() => setToggle('Create')}
						style={{ marginLeft: '30px' }}>
						Create Tag
					</button>
				</div>

				<Meter arr={tags} />

				<div className="Dashboard-tasks">
					<MapTags
						tags={toDo(tags)}
						name="To Do"
						handleTagClick={handleTagClick}
					/>
					<MapTags
						tags={inProgress(tags)}
						name="In Progress"
						handleTagClick={handleTagClick}
					/>
					<MapTags
						tags={completed(tags)}
						name="Completed"
						handleTagClick={handleTagClick}
					/>
					<MapTags
						tags={paused(tags)}
						name="Paused"
						handleTagClick={handleTagClick}
					/>
				</div>
			</div>
		);
	}
}

export default List;
