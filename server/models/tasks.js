const { pool } = require('../util/database');
const crypto = require('crypto-js');

const Tasks = (tasks) => {
  this.task = tasks.task;
  this.status = tasks.status;
  this.priority = tasks.priority;
  this.startDate = tasks.start_date;
  this.endDate = tasks.end_date;
  this.userId = tasks.userId;
};

Tasks.create = async (newTask) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const Tasks = { ...newTask, id };
  try {
    await pool.query('INSERT INTO Tasks SET ?', Tasks);
    return { id, ...newTask };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Tasks.getAll = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM Tasks');
    if (rows.length) {
      const data = rows.map((user) => {
        user.id = user.id.toString('utf8');
        return user;
      });
      const count = rows.length;
      return { count, ...data };
    }
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Tasks.getById = async (id) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  try {
    const [rows] = await pool.execute('SELECT * FROM Tasks WHERE id = ?', [idBuffer]);
    if (rows.length) {
      const task = {
        ...rows[0],
        id: rows[0].id.toString('utf-8')
      };
      return task;
    }
    throw { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Tasks.updateById = async (id, Tasks) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  try {
    const [rows] = await pool.execute(
      'UPDATE Tasks SET task = ?, status = ?, priority = ?, end_date = ?, start_date = ? WHERE id = ?',
      [Tasks.task, Tasks.status, Tasks.priority, Tasks.endDate, Tasks.startDate, idBuffer]
    );

    if (rows.affectedRows === 0) {
      throw { kind: 'not_found' };
    }
    return { id, ...Tasks };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Tasks.delete = async (id) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  try {
    const [rows] = await pool.query('DELETE FROM Tasks WHERE id = ?', [idBuffer]);
    if (rows.affectedRows == 0) {
      throw { kind: 'not_found' };
    }
    console.log('deleted tasks with id: ', id);
    return rows;
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

module.exports = Tasks;
