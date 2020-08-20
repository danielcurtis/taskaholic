import React from 'react';
import Icon from '../../../assets/icon.png';

function Brand() {
	return (
		<div className="Menu-brand">
			<img src={Icon} alt="clock" />
			<h1
				style={{
					fontFamily: `Shrikhand`,
				}}>
				Taskaholic
			</h1>
		</div>
	);
}

export default Brand;
