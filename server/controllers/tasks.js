const Task = require('../models/tasks.js');

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  const task = new Task({
    task: req.body.task,
    status: req.body.status,
    priority: req.body.priority,
    startDate: req.body.start_date,
    endDate: req.body.end_date,
    userId: req.body.userId
  });

  try {
    const data = await Task.create(task);

    res.status(201).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message || 'Some error occurred while creating the Task.'
    });
  }
};

exports.findById = async (req, res) => {
  try {
    const data = await Task.getById(req.params.id);

    res.status(200).send(data);
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: `There is no task with id ${req.params.id}`
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Task.getAll();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message
    });
  }
};

exports.updateById = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content cannot be empty!'
    });
    return;
  }

  try {
    const data = await Task.updateById(req.params.id, new Task(req.body));
    res.send(data);
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: `There is no user with id ${req.params.id}`
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Task.delete(req.params.id);
    res.status(200).send({ message: 'Successfully deleted.' });
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: `There is no task with id ${req.params.id}`
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};
