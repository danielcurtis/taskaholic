// @ts-check
'use strict';

const express = require('express');
const {
	getTags,
	getTag,
	createTag,
	updateTag,
	deleteTag,
} = require('../controllers/tags');
const Tag = require('../models/Tag');

// Include other resource routers
const taskRouter = require('./tasks');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:tagId/tasks', taskRouter);
// Use protect on all routes
router.use(protect);

router.route('/').get(advancedResults(Tag, 'tasks'), getTags).post(createTag);

router.route('/:id').get(getTag).put(updateTag).delete(deleteTag);

module.exports = router;
