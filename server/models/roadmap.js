const { pool } = require('../util/database');
const crypto = require('crypto-js');

const Roadmap = function (roadmap) {
  this.title = roadmap.title;
  this.description = roadmap.description;
};

Roadmap.create = async (newRoadmap, result) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const roadmap = { ...newRoadmap, id };
  pool.query('INSERT INTO roadmaps SET ?', roadmap, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, { id, ...newRoadmap });
  });
};

Roadmap.getAll = (result) => {
  pool.query('SELECT * FROM roadmaps', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Roadmap.findById = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  pool.query('SELECT * FROM roadmaps WHERE id = ?', idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);

      return;
    }

    if (res.length) {
      const roadmap = {
        ...res[0],
        id: res[0].id.toString('utf-8')
      };

      result(null, roadmap);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

Roadmap.delete = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  pool.query('DELETE FROM roadmaps WHERE id = ?', idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('deleted roadmap with id: ', id);
    result(null, res);
  });
};

module.exports = Roadmap;
