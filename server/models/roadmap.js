const { pool } = require('../util/database');
const crypto = require('crypto-js');

const Roadmap = function (roadmap) {
  this.title = roadmap.title;
  this.description = roadmap.description;
  this.parent_id = roadmap.parent_id;
};

Roadmap.create = async (newRoadmap) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const roadmap = { ...newRoadmap, id };
  try {
    await pool.query('INSERT INTO roadmaps SET ?', [roadmap]);
    return { id, ...newRoadmap };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Roadmap.getAll = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM roadmaps');
    const roadmaps = rows.map((roadmap) => {
      return {
        ...roadmap,
        id: roadmap.id.toString('utf-8')
      };
    });

    const count = rows.length;
    return { count, roadmaps };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Roadmap.findById = async (id) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  try {
    const [rows] = await pool.execute('SELECT * FROM roadmaps WHERE id = ?', [idBuffer]);
    if (rows.length) {
      const roadmap = {
        ...rows[0],
        id: rows[0].id.toString('utf-8')
      };
      return roadmap;
    }
    throw { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Roadmap.delete = async (id) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  try {
    const [result] = await pool.execute('DELETE FROM roadmaps WHERE id = ?', [idBuffer]);
    if (result.affectedRows == 0) {
      throw { kind: 'not_found' };
    }
    console.log('deleted roadmap with id: ', id);
    return result;
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};
module.exports = Roadmap;
