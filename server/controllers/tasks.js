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

  Task.create(task, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message || 'Some error occurred while creating the Task.'
      });
    }
    res.send(data);
  });
};

exports.findById = (req, res) => {
  Task.getById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `There is no task with id ${req.params.id}`
        });
        return;
      }
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.send(data);
  });
};

exports.getAll = (req, res) => {
  Task.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.send(data);
  });
};

exports.updateById = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content cannot be empty!'
    });
    return;
  }

  Task.updateById(req.params.id, new Task(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `There is no user with id ${req.params.id}`
        });
        return;
      }
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.send(data);
  });
};

exports.delete = (req, res) => {
  Task.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `There is no task with id ${req.params.id}`
        });
        return;
      }
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.status(200).send({ message: 'Successfully deleted.' });
  });
};
