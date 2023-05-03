const Roadmap = require('../models/roadmap.js');

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  const roadmap = new Roadmap({
    title: req.body.title,
    description: req.body.description
  });

  Roadmap.create(roadmap, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message || 'Some error occurred while creating the roadmap.'
      });
    }

    res.status(201).send(data);
  });
};

exports.getAll = (req, res) => {
  Roadmap.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.send(data);
  });
};

exports.findById = (req, res) => {
  Roadmap.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `There is no roadmap with id ${req.params.id}`
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
  Roadmap.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `There is no roadmap with id ${req.params.id}`
        });
        return;
      }
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.status(200).send({message: 'Successfully deleted.' });
  });
};
