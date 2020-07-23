// @ts-check
'use strict';

const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Habit = require('../models/Habit');

// @desc    Get all habits
// @route   GET /api/v1/habits
// @method  Private
exports.getHabits = asyncHandler(async (req, res, next) => {
	res.status(200).json(res.advancedResults);
});

// @desc    Get single habit
// @route   GET /api/v1/habits/:id
// @method  Private
exports.getHabit = asyncHandler(async (req, res, next) => {
	const habit = await Habit.findById(req.params.id);

	if (!habit) {
		return next(
			new ErrorResponse(`Habit not found with an ID of ${req.params.id}`, 404)
		);
	}

	// Ensure user is owner
	if (habit.user.toString() !== req.user.id) {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
		);
	}

	res.status(200).json({ success: 'true', data: habit });
});

// @desc    Create new habit
// @route   POST /api/v1/habits
// @method  Private
exports.createHabit = asyncHandler(async (req, res, next) => {
	// Add user to req.body
	req.body.user = req.user.id;

	const habit = await Habit.create(req.body);

	res.status(201).json({
		success: true,
		data: habit,
	});
});

// @desc    Update habit
// @route   PUT /api/v1/habits/:id
// @method  Private
exports.updateHabit = asyncHandler(async (req, res, next) => {
	let habit = await Habit.findById(req.params.id);

	if (!habit) {
		return next(
			new ErrorResponse(`Habit not found with an ID of ${req.params.id}`, 404)
		);
	}

	// Ensure user is owner
	if (habit.user.toString() !== req.user.id) {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
		);
	}

	habit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({ success: true, data: habit });
});

// @desc    Delete habit
// @route   DELETE /api/v1/habits/:id
// @method  Private
exports.deleteHabit = asyncHandler(async (req, res, next) => {
	const habit = await Habit.findByIdAndDelete(req.params.id);

	if (!habit) {
		return next(
			new ErrorResponse(`Habit not found with an ID of ${req.params.id}`, 404)
		);
	}

	// Ensure user is owner
	if (habit.user.toString() !== req.user.id) {
		return next(
			new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
		);
	}

	habit.remove();

	res.status(200).json({ success: true, data: {} });
});
