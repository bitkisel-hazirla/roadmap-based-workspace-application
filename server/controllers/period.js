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

  try {
    const data = await Period.create(period);

    res.status(201).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message || 'Some error occurred while creating the period'
    });
  }
};

exports.getByUserId = async (req, res) => {
  const userId = req.userId;

  try {
    const data = await Period.findByUserId(userId);
    res.send(data);
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: 'The user has no period record.'
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};

exports.getByDate = async (req, res) => {
  const userId = req.userId;
  const date = req.params.date;

  try {
    const data = await Period.findByDate(userId, date);
    res.send(data);
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: 'The user has no period record at that date.'
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};

exports.getLatestPeriods = async (req, res) => {
  const userId = req.userId;
  const dayBack = req.params.dayBack;

  try {
    const data = await Period.findLatestPeriods(userId, dayBack);
    res.send(data);
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: 'The user has no period record between provided dates.'
      });
    }
    return res.status(500).send({
      message: err.message
    });
  }
};

exports.update = async (req, res) => {
  const userId = req.userId;
  const period = req.body.period;

  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  try {
    const data = await Period.update(userId, period);
    res.send(data);
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: `Period not found for user ${userId} for today.`
      });
    }

    return res.status(500).send({
      message: err.message || 'Error updating period.'
    });
  }
};

exports.delete = async (req, res) => {
  const userId = req.userId;
  const date = req.params.date;

  try {
    await Period.delete(userId, date);
    res.send({ message: 'User is deleted successfully.' });
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};
