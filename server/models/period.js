const crypto = require('crypto-js');
const { pool } = require('../util/database');

const Period = function (period) {
  this.period = period.period;
  this.date = period.date;
  this.user_id = period.user_id;
};

Period.create = async (newPeriod, result) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const period = { ...newPeriod, id };
  pool.query('INSERT INTO periods SET ?', period, (err, res) => {
    if (err) return result(err, null);
    console.log('created period: ', { id, ...newPeriod });
    result(null, { id, ...newPeriod });
  });
};

Period.findByUserId = (user_id, result) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  pool.query('SELECT * FROM periods WHERE user_id = ?', idBuffer, (err, res) => {
    if (err) {
      return result(err, null);
    }
    if (res.length) {
      console.log('found the period(s): ', res);
      const data = res.map((period) => {
        period.id = period.id.toString('utf8');
        period.user_id = period.user_id.toString('utf8');
        return period;
      });
      const count = res.length;
      return result(null, { count, data });
    }

    result({ kind: 'not_found' }, null);
  });
};

Period.findByDate = (user_id, date, result) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  pool.query(
    'SELECT * FROM periods WHERE user_id = ? AND date = ?',
    [idBuffer, date],
    (err, res) => {
      if (err) {
        return result(err, null);
      }
      if (res.length) {
        console.log('found the period(s): ', res);
        const data = res.map((period) => {
          period.id = period.id.toString('utf8');
          period.user_id = period.user_id.toString('utf8');
          return period;
        });
        const count = res.length;
        return result(null, { count, data });
      }

      result({ kind: 'not_found' }, null);
    }
  );
};

Period.findLatestPeriods = (user_id, daysBack, result) => {
  const today = new Date();
  const startDate = new Date(today.getTime() - daysBack * 24 * 60 * 60 * 1000);
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  pool.query(
    'SELECT * FROM periods WHERE user_id = ? AND date BETWEEN ? AND ?',
    [idBuffer, startDate, today],
    (err, res) => {
      if (err) {
        return result(err, null);
      }
      if (res.length) {
        console.log('found the period(s): ', res);
        const data = res.map((period) => {
          period.id = period.id.toString('utf8');
          period.user_id = period.user_id.toString('utf8');
          return period;
        });
        const count = res.length;
        return result(null, { count, data });
      }

      result({ kind: 'not_found' }, null);
    }
  );
};

Period.update = (user_id, updatedPeriod, result) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');
  const today = new Date().toISOString().slice(0, 10);

  pool.query(
    'UPDATE periods SET period = ? WHERE user_id = ? AND date = ?',
    [updatedPeriod, idBuffer, today],
    (err, res) => {
      if (err) return result(err, null);
      if (res.affectedRows == 0) {
        return result({ kind: 'not_found' }, null);
      }
      console.log(`updated period with user_id ${user_id} and date ${today}: `, {
        ...updatedPeriod,
        user_id,
        today
      });
      result(null, { ...updatedPeriod, user_id, today });
    }
  );
};

Period.delete = (user_id, date, result) => {
  const idBuffer = Buffer.alloc(18, user_id, 'utf-8');

  pool.query('DELETE FROM periods WHERE user_id = ? AND date = ?', [idBuffer, date], (err, res) => {
    if (err) return result(null, err);

    if (res.affectedRows == 0) {
      return result({ kind: 'not_found' }, null);
    }

    result(null, res);
  });
};

module.exports = Period;
