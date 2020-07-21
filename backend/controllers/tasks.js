const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Task = require('../models/Task');
const Tag = require('../models/Tag');

// @desc    Get all tasks
// @route   GET /api/v1/tasks
// @route   GET /api/v1/tags/:tagId/tasks
// @method  Private
exports.getTasks = asyncHandler(async (req, res, next) => {
  // Get tasks by specific tag
  if (req.params.tagId) {
    const tasks = await Task.find({ tag: req.params.tagId, user: req.user.id });

    return res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc    Get single task
// @route   GET /api/v1/tasks/:id
// @method  Private
exports.getTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`Task not found with an ID of ${req.params.id}`, 404)
    );
  }

  // Ensure user is owner
  if (task.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
    );
  }

  res.status(200).json({ success: 'true', data: task });
});

// @desc    Create new task
// @route   POST /api/v1/tags/:bootcampId/tasks
// @method  Private
exports.createTask = asyncHandler(async (req, res, next) => {
  req.body.tag = req.params.tagId;

  const tag = await Tag.findById(req.params.tagId);

  if (!tag) {
    return next(
      new ErrorResponse(`No tag with the id of ${req.params.tagId}`),
      404
    );
  }

  // Add user to task
  req.body.user = req.user.id;

  const task = await Task.create(req.body);

  res.status(200).json({
    success: true,
    data: task,
  });
});

// @desc    Update task
// @route   PUT /api/v1/tasks/:id
// @method  Private
exports.updateTask = asyncHandler(async (req, res, next) => {
  let task = await Task.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`Task not found with an ID of ${req.params.id}`, 404)
    );
  }

  // Ensure user is owner
  if (task.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
    );
  }

  task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: task });
});

// @desc    Delete task
// @route   DELETE /api/v1/tasks/:id
// @method  Private
exports.deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return next(
      new ErrorResponse(`Task not found with an ID of ${req.params.id}`, 404)
    );
  }

  // Ensure user is owner
  if (task.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(`User ${req.params.id} is not authorized`, 404)
    );
  }

  await task.remove();

  res.status(200).json({ success: true, data: {} });
});
