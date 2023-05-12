const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const { sendWelcomeEmail } = require('../util/mailManager.js');

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  try {
    const emailExist = await User.findByEmail(req.body.email);
    console.log(emailExist);
    if (!emailExist === undefined) {
      return res.status(409).send({
        message: 'The email is in use.'
      });
    }

    const usernameExist = await User.findByUsername(req.body.username);
    if (!usernameExist === undefined) {
      return res.status(409).send({
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

    sendWelcomeEmail(user.email, user.name);

    const createdUser = await User.create(user);
    res.send(createdUser);
  } catch (err) {
    return res.status(500).send({
      message: err.message || 'Some error occurred while creating the user.'
    });
  }
};

exports.findById = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);

    res.status(200).send(data);
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

exports.getAll = async (req, res) => {
  try {
    const data = await User.getAll();
    res.status(200).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findByEmail(email);
    if (user.kind === 'not_found') {
      throw { kind: 'not_found' };
    }

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
      token,
      id: user.id.toString()
    });
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: 'The email or the password is incorrect!'
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};

exports.updateById = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Content cannot be empty!'
    });
  }

  try {
    const data = await User.updateById(req.params.id, new User(req.body));
    res.status(200).send(data);
  } catch (err) {
    if (err) {
      if (err.kind === 'not_found') {
        return res.status(404).send({
          message: `There is no user with id ${req.params.id}`
        });
      }
      res.status(500).send({
        message: err.message
      });
    }
  }
};

exports.deleteLoggedUser = async (req, res) => {
  const userId = req.userId;

  try {
    await User.delete(userId);
    res.status(200).send({ message: 'User is deleted successfully.' });
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};

exports.getLoggedUser = async (req, res) => {
  const userId = req.userId;

  try {
    const data = await User.findById(userId);
    res.status(200).send(data);
  } catch (err) {
    return res.status(500).send({
      message: err.message
    });
  }
};
