function colorFromName(name) {
	if (name === 'To Do') {
		return 'red';
	} else if (name === 'In Progress') {
		return 'blue';
	} else if (name === 'Completed') {
		return 'green';
	} else if (name === 'Paused') {
		return 'grey';
	} else {
		return 'Invalid parameter';
	}
}

export default colorFromName;
