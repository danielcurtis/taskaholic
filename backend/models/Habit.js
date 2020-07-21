// @ts-check
'use strict';

const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a habit name'],
		trim: true,
		maxlength: [10, 'Habit name can not be more than 10 characters'],
	},
	streak: Number,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
});

module.exports = mongoose.model('Habit', HabitSchema);
