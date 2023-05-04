const Concept = require('../models/concept.js');

exports.create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Content can not be empty!' });
  }

  const concept = new Concept({
    title: req.body.title,
    concept: req.body.concept,
    roadmap_id: req.body.roadmap_id
  });

  Concept.create(concept, (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message || 'Some error occured while creating the concept.'
      });
    }
    res.status(201).send(data);
  });
};

exports.findById = (req, res) => {
  Concept.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `There is no concept with id ${req.params.id}`
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

exports.findByRoadmapId = (req, res) => {
  Concept.findByRoadmapId(req.params.roadmap_id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(400).send({
          message: `There is no concept with roadmap id ${req.params.roadmap_id}`
        });
        return;
      }
      console.log('aysu');
      res.status(500).send({
        message: err.message
      });
      return;
    }
    res.send(data);
  });
};

exports.delete = (req, res) => {
  Concept.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `There is no concept with id ${req.params.id}`
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
