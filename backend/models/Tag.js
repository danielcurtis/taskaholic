// @ts-check
'use strict';

const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a tag'],
			trim: true,
			maxlength: [6, 'Tag can not be more than 6 characters'],
		},
		due: String,
		description: {
			type: String,
			trim: true,
			maxlength: [500, 'Description can not be more than 500 characters'],
		},
		status: {
			type: String,
			required: [true, 'Please set status'],
			enum: ['Completed', 'In Progress', 'Paused', 'To Do'],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

// Cascade delete tasks when a tag is deleted
TagSchema.pre('remove', async function (next) {
	console.log(`Courses being removed from tag ${this._id}`);
	await this.model('Task').deleteMany({ tag: this._id });
	next();
});

// Reverse populate with virtuals
TagSchema.virtual('tasks', {
	ref: 'Task',
	localField: '_id',
	foreignField: 'tag',
	justOne: false,
});

module.exports = mongoose.model('Tag', TagSchema);
