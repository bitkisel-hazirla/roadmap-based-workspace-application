const { pool } = require('../util/database');
const crypto = require('crypto-js');

const Concept = function (concept) {
  this.title = concept.title;
  this.concept = concept.concept;
  this.roadmap_id = concept.roadmap_id;
};

Concept.create = async (newConcept, result) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const concept = { ...newConcept, id };
  pool.query('INSERT INTO concepts SET ?', concept, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, { id, ...newConcept });
  });
};

Concept.findById = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  pool.query('SELECT * FROM concepts WHERE id = ?', idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);

      return;
    }

    if (res.length) {
      const concept = {
        ...res[0],
        id: res[0].id.toString('utf-8')
      };

      result(null, concept);
      return;
    }

    result({ kind: 'not-found' }, null);
  });
};

Concept.findByRoadmapId = (roadmap_id, result) => {
  const idBuffer = Buffer.alloc(18, roadmap_id, 'utf-8');
  pool.query('SELECT * FROM concepts WHERE roadmap_id = ?', idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      const concept = {
        ...res
      };
      result(null, concept);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};


Concept.delete = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8')
  pool.query('DELETE FROM concepts WHERE id = ?', idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null)
      return
    }

    console.log('deleted roadmap with id: ', id)
    result(null, res)
  })
}

module.exports = Concept;
