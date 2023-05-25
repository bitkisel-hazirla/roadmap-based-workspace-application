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

Tasks.create = async (newTask, result) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const Tasks = { ...newTask, id };
  const query = 'INSERT INTO Tasks SET ?'
  pool.query(query, Tasks, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('created tasks: ', { id, ...newTask, password: undefined });
    result(null, { id, ...newTask, password: undefined });
  });
};

Tasks.getAll = (result) => {
  const query = 'SELECT * FROM Tasks'
  pool.query(query, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('Tasks: ', { ...res, password: undefined });
    result(null, { ...res, password: undefined });
  });
};

Tasks.getById = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  pool.query('SELECT * FROM Tasks WHERE id = ?', [idBuffer], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('Tasks: ', { ...res, password: undefined });
    result(null, { ...res, password: undefined });
  });
};

Tasks.updateById = (id, Tasks, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  const query = 'UPDATE Tasks SET task = ?, status = ?, priority = ?, end_date = ?, start_date = ? WHERE id = ?'
  pool.query(query,
    [Tasks.task, Tasks.status, Tasks.priority, Tasks.endDate, Tasks.startDate, idBuffer],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        console.log(res);
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('updated tasks: ', { id, ...Tasks });
      result(null, { id, ...Tasks });
    }
  );
};

Tasks.delete = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');
  const query = 'DELETE FROM Tasks WHERE id = ?'
  pool.query(query, idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('deleted tasks with id: ', id);
    result(null, res);
  });
};

module.exports = Tasks;
