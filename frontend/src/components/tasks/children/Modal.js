// @ts-check
'use strict';

import React, { useState } from 'react';

function Text({ initTxt, styles, len }) {
	const [txt, setTxt] = useState(initTxt);
	const [toggle, setToggle] = useState(true);

	if (toggle) {
		return (
			<h2 className={`py-2 ${styles}`} onClick={() => setToggle(!toggle)}>
				{txt}
			</h2>
		);
	} else {
		return (
			<div className="flex">
				<input
					className="w-full py-1 pl-2 mb-2 bg-blue-800 text-white focus"
					type="text"
					maxlength={len}
					value={txt}
					onChange={(e) => setTxt(e.target.value)}
				/>
				<button
					className="h-8 bg-transparent hover:bg-indigo-500 text-indigo-700 px-2 hover:text-white border border-indigo-500 hover:border-transparent rounded"
					onClick={() => setToggle(!toggle)}>
					Save
				</button>
			</div>
		);
	}
}

function Modal({ setModal, modal }) {
	// Date cleanup
	const pad = (n) => (n < 0 ? '0' + n : n);
	let dueDate = new Date(modal.due);
	let dueStr = `${pad(parseInt(dueDate.getMonth()))}`;

	let tiki = pad('2');

	console.log('DUE', tiki);

	const [log, setLog] = useState(modal.timelog);
	const [due, setDue] = useState(dueStr);
	const [sts, setSts] = useState(modal.status);
	const statuses = ['Completed', 'In Progress', 'Paused', 'Not Started'];

	const updateLog = (val, i) => {
		let arr = log;
		arr[i][0] = val;
		setLog(arr);
	};

	return (
		<div className="z-10 bg-blue-900 w-full sm:w-3/4 md:w-3/4 lg:w-5/6 h-full fixed text-center">
			<div className="bg-blue-900 max-w-screen-sm text-left m-auto mt-10 text-white">
				<div className="flex justify-between">
					<Text
						initTxt={modal.name}
						len={50}
						styles="text-2xl text-indigo-700"
					/>
					<button
						className="self-center h-8 bg-transparent hover:bg-red-500 text-red-700 px-2 hover:text-white border border-red-500 hover:border-transparent rounded"
						onClick={() => setModal(false)}>
						Close
					</button>
				</div>
				<Text initTxt={modal.description} len={200} styles="text-white" />
				<Text initTxt={modal.tag} len={7} styles="text-owl-blu" />

				<hr className="my-10 border-owl-grn" />

				<div className="flex items-center my-3">
					<div>
						<label className="mr-1 text-sm" htmlFor="status">
							STATUS:
						</label>
						<select
							className="mr-3 bg-blue-800 text-owl-tan text-sm"
							id="status"
							onChange={(e) => setSts(e.target.value)}>
							{statuses.map((el, i) => {
								if (el !== sts) {
									return (
										<option key={i} value={el}>
											{el}
										</option>
									);
								} else {
									return (
										<option key={i} value={sts} defaultValue>
											{sts}
										</option>
									);
								}
							})}
						</select>
					</div>
					<label className="mr-1 text-sm" htmlFor="date">
						DUE:
					</label>
					<input
						id="date"
						className="bg-blue-900 text-sm text-owl-tan rounded-sm px-1"
						type="date"
						value={due}
						onChange={(e) => setDue(e.target.value)}
					/>
				</div>
				{/* Big onchange */ console.log(due)}
				<div className="my-3 text-owl-tan">
					<span className="text-sm text-white">TIMESHEET:</span>
					{console.log('LOG', log)}
					{log.map((el, i) => {
						return (
							<div key={i} className="flex items-center my-1">
								<Text initTxt={el[1]} len={10} styles="text-sm" />
								<span className="text-sm mx-1">on</span>
								<input
									className="bg-blue-900 text-sm rounded-sm px-1"
									type="date"
									value={new Date(el[0])}
									onChange={(e) => updateLog(e.target.value, i)}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Modal;
