const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  User.findByEmail(req.body.email, (err, data) => {
    if (data) {
      return res.status(500).send({
        message: 'The email is in use.'
      });
    }

    User.findByUsername(req.body.username, async (err, data) => {
      if (data) {
        return res.status(500).send({
          message: 'The username is in use.'
        });
      }

      const hashedPass = await bcrypt.hash(req.body.password, 12);

      const user = new User({
        email: req.body.email.toLowerCase(),
        name: req.body.name,
        username: req.body.username,
        password: hashedPass,
        date_of_birth: req.body.date_of_birth
      });

      User.create(user, (err, data) => {
        if (err) {
          return res.status(500).send({
            message: err.message || 'Some error occurred while creating the user.'
          });
        }
        res.send(data);
      });
    });
  });
};

exports.findById = (req, res) => {
  User.findById(req.params.id, (err, data) => {
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

exports.getAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.send(data);
  });
};

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findByEmail(email, async (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `The email or the password is incorrect!`
        });
        return;
      }
      res.status(500).send({
        message: err.message
      });
      return;
    }

    const user = data;

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      return res.status(404).send({
        message: 'The email or the password is incorrect!'
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id.toString()
      },
      process.env.JWT_SECRET
    );

    return res.status(200).send({
      token: token,
      id: user.id
    });
  });
};

exports.updateById = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Content cannot be empty!'
    });
    return;
  }

  User.updateById(req.params.id, new User(req.body), (err, data) => {
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
  User.delete(req.params.id, (err, data) => {
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
    res.send({ message: 'User is deleted successfully.' });
  });
};
