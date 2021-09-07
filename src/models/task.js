const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

taskSchema.methods.toJSON = function () {
  const task = this;
  const { description, completed, _id, createdAt, updatedAt } = task.toObject();

  const taskView = { description, completed, id: _id, createdAt, updatedAt };

  return taskView;
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
