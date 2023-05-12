const crypto = require('crypto-js');
const { pool } = require('../util/database');

const Period = function (period) {
  this.period = period.period;
  this.date = period.date;
  this.user_id = period.user_id;
};

Period.create = async (newPeriod) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const period = { ...newPeriod, id };
  try {
    await pool.query('INSERT INTO periods SET ?', period);
    return { id, ...newPeriod };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Period.findByUserId = async (user_id) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  try {
    const [rows] = await pool.execute('SELECT * FROM periods WHERE user_id = ?', [idBuffer]);
    if (rows.length) {
      const data = rows.map((period) => {
        period.id = period.id.toString('utf8');
        period.user_id = period.user_id.toString('utf8');
        return period;
      });
      const count = rows.length;
      return { count, data };
    }
    return { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Period.findByDate = async (user_id, date) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  try {
    const [rows] = await pool.execute('SELECT * FROM periods WHERE user_id = ? AND date = ?', [
      idBuffer,
      date
    ]);
    if (rows.length) {
      const data = rows.map((period) => {
        period.id = period.id.toString('utf8');
        period.user_id = period.user_id.toString('utf8');
        return period;
      });
      const count = rows.length;
      return { count, data };
    }

    throw { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Period.findLatestPeriods = async (user_id, daysBack) => {
  const today = new Date();
  const startDate = new Date(today.getTime() - daysBack * 24 * 60 * 60 * 1000);
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  try {
    const [rows] = await pool.execute(
      'SELECT * FROM periods WHERE user_id = ? AND date BETWEEN ? AND ?',
      [idBuffer, startDate, today]
    );

    if (rows.length) {
      const data = rows.map((period) => {
        period.id = period.id.toString('utf8');
        period.user_id = period.user_id.toString('utf8');
        return period;
      });
      const count = rows.length;
      return { count, data };
    }
    throw { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Period.update = async (user_id, updatedPeriod) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');
  const today = new Date().toISOString().slice(0, 10);

  try {
    const [rows] = await pool.execute(
      'UPDATE periods SET period = ? WHERE user_id = ? AND date = ?',
      [updatedPeriod, idBuffer, today]
    );

    if (rows.affectedRows == 0) {
      throw { kind: 'not_found' };
    }
    return { ...updatedPeriod, user_id, today };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

Period.delete = async (user_id, date) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  try {
    const [rows] = await pool.query('DELETE FROM periods WHERE user_id = ? AND date = ?', [
      idBuffer,
      date
    ]);
    if (rows.affectedRows == 0) {
      throw { kind: 'not_found' };
    }
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

module.exports = Period;
