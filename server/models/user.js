const crypto = require('crypto-js');
const { pool } = require('../util/database');

const User = function (user) {
  this.email = user.email;
  this.name = user.name;
  this.username = user.username;
  this.password = user.password;
  this.date_of_birth = user.date_of_birth;
};

User.create = async (newUser, result) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const user = { ...newUser, id };
  pool.query('INSERT INTO users SET ?', user, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    console.log('created user: ', { id, ...newUser, password: undefined });
    result(null, { id, ...newUser, password: undefined });
  });
};

User.findByEmail = (email, result) => {
  pool.query('SELECT * FROM users WHERE email = ?', email, (err, res) => {
    if (err) {
      return result(err, null);
    }

    if (res.length) {
      return result(null, res[0]);
    }

    result({ kind: 'not_found' }, null);
  });
};

User.findByUsername = (username, result) => {
  pool.query('SELECT * FROM users WHERE username = ?', username, (err, res) => {
    if (err) {
      return result(err, null);
    }

    if (res.length) {
      console.log('found the user: ', res[0]);
      return result(null, res[0]);
    }

    result({ kind: 'not_found' }, null);
  });
};

User.findById = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  pool.query('SELECT * FROM users WHERE id = ?', idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);

      return;
    }

    if (res.length) {
      const user = {
        ...res[0],
        id: res[0].id.toString('utf-8')
      };

      delete user.password;

      result(null, user);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

User.getAll = (result) => {
  pool.query('SELECT * FROM users', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('users: ', { ...res, password: undefined });
    result(null, { ...res, password: undefined });
  });
};

User.updateById = (id, user, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  pool.query(
    'UPDATE users SET name = ?, date_of_birth = ?, roadmap_id = ? WHERE id = ?',
    [user.name, user.date_of_birth, user.roadmap_id, idBuffer],
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

      console.log('updated user: ', { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.delete = (id, result) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  pool.query('DELETE FROM users WHERE id = ?', idBuffer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('deleted user with id: ', id);
    result(null, res);
  });
};

module.exports = User;
