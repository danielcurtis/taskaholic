// @ts-check
'use strict';

const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Tag = require('../models/Tag');

// @desc    Get all tasks
// @route   GET /api/v1/users/:userId/tags
// @method  Private
exports.getTags = asyncHandler(async (req, res, next) => {
	res.status(200).json(res.advancedResults);
});

// @desc    Get single tag
// @route   GET /api/v1/tags/:id
// @method  Private
exports.getTag = asyncHandler(async (req, res, next) => {
	const tag = await Tag.findById(req.params.id);

	if (!tag) {
		return next(
			new ErrorResponse(`Tag not found with an ID of ${req.params.id}`, 404)
		);
	}

	// Ensure user is owner
	if (tag.user.toString() !== req.user.id) {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
		);
	}

	res.status(200).json({ success: 'true', data: tag });
});

// @desc    Create new tag
// @route   POST /api/v1/tags
// @method  Private
exports.createTag = asyncHandler(async (req, res, next) => {
	// Add user to req.body
	req.body.user = req.user.id;

	const tag = await Tag.create(req.body);

	res.status(201).json({
		success: true,
		data: tag,
	});
});

// @desc    Update tag
// @route   PUT /api/v1/tags/:id
// @method  Private
exports.updateTag = asyncHandler(async (req, res, next) => {
	let tag = await Tag.findById(req.params.id);

	if (!tag) {
		return next(
			new ErrorResponse(`Tag not found with an ID of ${req.params.id}`, 404)
		);
	}

	// Ensure user is owner
	if (tag.user.toString() !== req.user.id) {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
		);
	}

	tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({ success: true, data: tag });
});

// @desc    Delete tag
// @route   DELETE /api/v1/tags/:id
// @method  Private
exports.deleteTag = asyncHandler(async (req, res, next) => {
	const tag = await Tag.findByIdAndDelete(req.params.id);

	if (!tag) {
		return next(
			new ErrorResponse(`Tag not found with an ID of ${req.params.id}`, 404)
		);
	}

	// Ensure user is owner
	if (tag.user.toString() !== req.user.id) {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
		);
	}

	tag.remove();

	res.status(200).json({ success: true, data: {} });
});
