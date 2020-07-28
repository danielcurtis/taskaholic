// @ts-check

import React from 'react';
import convertDate from '../../utils/convertDate';
import colorFromName from '../../utils/colorFromName';

function MapTasks({ name, arr }) {
	arr.sort((a, b) => (a.due > b.due ? 1 : -1));

	// If array is empty, return null
	return arr.length > 0 ? (
		<div className="Dashboard-tasks-map">
			<h2 className={colorFromName(name)}>{name}</h2>

			<div>
				{arr.map((el, i) => {
					return (
						<div key={i} className="Dashboard-tasks-map-group">
							<div>{el.name}</div>
							<div>
								<div>{el.tag.name}</div>
								<div>{convertDate(el.due)}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	) : null;
}

export default MapTasks;
