const Period = require('../models/period');

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  const period = new Period({
    period: req.body.period,
    date: req.body.date,
    user_id: req.body.user_id
  });

  Period.create(period, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message || 'Some error occurred while creating the user'
      });
    }
    res.status(201).send(data);
  });
};

exports.getByUserId = async (req, res) => {
  const userId = req.userId;

  Period.findByUserId(userId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        return res.status(404).send({
          message: `The user has no period record.`
        });
      }

      return res.status(500).send({
        message: err.message
      });
    }
    res.send(data);
  });
};

exports.getByDate = async (req, res) => {
  const userId = req.userId;
  const date = req.params.date;

  Period.findByDate(userId, date, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        return res.status(404).send({
          message: `The user has no period record at that date.`
        });
      }

      return res.status(500).send({
        message: err.message
      });
    }
    res.send(data);
  });
};

exports.getLatestPeriods = async (req, res) => {
  const userId = req.userId;
  const dayBack = req.params.dayBack;

  Period.findLatestPeriods(userId, dayBack, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        return res.status(404).send({
          message: `The user has no period record between provided dates.`
        });
      }
      return res.status(500).send({
        message: err.message
      });
    }
    res.send(data);
  });
};

exports.update = async (req, res) => {
  const userId = req.userId;
  const period = req.body.period;

  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }
  Period.update(userId, period, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        return res.status(404).send({
          message: `Period not found for user ${userId} for today.`
        });
      }

      return res.status(500).send({
        message: err.message || 'Error updating period.'
      });
    }
    res.send(data);
  });
};

exports.delete = async (req, res) => {
  const userId = req.userId;
  const date = req.params.date;

  Period.delete(userId, date, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.send({ message: 'User is deleted successfully.' });
  });
};
