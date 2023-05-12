const Roadmap = require('../models/roadmap.js');

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  const roadmap = new Roadmap({
    title: req.body.title,
    description: req.body.description,
    parent_id: req.body.parent_id
  });

  try {
    const data = await Roadmap.create(roadmap);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the roadmap.'
    });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Roadmap.getAll();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the roadmap.'
    });
  }
};

exports.findById = async (req, res) => {
  try {
    const data = await Roadmap.findById(req.params.id);
    res.status(200).send(data);
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: `There is no roadmap with id ${req.params.id}`
      });
    }
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving roadmap.'
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Roadmap.delete(req.params.id);
    res.status(200).send({ message: 'Successfully deleted.' });
  } catch (err) {
    if (err.kind === 'not_found') {
      return res.status(404).send({
        message: `There is no roadmap with id ${req.params.id}`
      });
    }
    res.status(500).send({
      message: err.message
    });
  }
};
