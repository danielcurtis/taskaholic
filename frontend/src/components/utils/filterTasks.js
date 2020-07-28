function toDo(arr) {
	return arr.filter((el) => el.status === 'To Do');
}

function inProgress(arr) {
	return arr.filter((el) => el.status === 'In Progress');
}

function paused(arr) {
	return arr.filter((el) => el.status === 'Paused');
}

function completed(arr) {
	return arr.filter((el) => el.status === 'Completed');
}

export { toDo, inProgress, paused, completed };
