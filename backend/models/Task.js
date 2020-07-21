const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  due: String,
  timelog: Array,
  description: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [500, 'Name can not be more than 50 characters'],
  },
  status: {
    type: String,
    required: [true, 'Please set status'],
    enum: ['Completed', 'In Progress', 'Paused', 'To Do'],
  },
  tag: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tag',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
