// @ts-check
'use strict';

const express = require('express');
const {
	getHabits,
	getHabit,
	createHabit,
	updateHabit,
	deleteHabit,
} = require('../controllers/habits');
const Habit = require('../models/Habit');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/').get(advancedResults(Habit), getHabits).post(createHabit);

router.route('/:id').get(getHabit).put(updateHabit).delete(deleteHabit);

module.exports = router;
