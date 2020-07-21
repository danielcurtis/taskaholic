// @ts-check
'use strict';

const ErrorResponse = require('../utils/errorResponse');

function errorHandler(err, req, res, next) {
	let error = { ...err };

	console.log(err);

	error.message = err.message;

	// Log to console for dev
	console.log(err.statusCode || 500);

	// Mongoose bad ObjectID
	if (err.name === 'CastError') {
		const message = `Resource not found`;
		error = new ErrorResponse(message, 404);
	}

	// Mongoose validation error
	if (err.name === 'ValidationError') {
		const message = Object.values(err.errors).map((val) => val.message);
		error = new ErrorResponse(message, 400);
	}

	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || 'Server Error',
	});
}

module.exports = errorHandler;
