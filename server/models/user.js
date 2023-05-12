const crypto = require('crypto-js');
const { pool } = require('../util/database');

const User = function (user) {
  this.email = user.email;
  this.name = user.name;
  this.username = user.username;
  this.password = user.password;
  this.date_of_birth = user.date_of_birth;
};

User.create = async (newUser) => {
  const id = crypto.lib.WordArray.random(16).toString();
  const user = { ...newUser, id };
  try {
    await pool.query('INSERT INTO users SET ?', user);
    return { id, ...newUser, password: undefined };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

User.findByEmail = async (email) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length) {
      return rows[0];
    }
    return { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

User.findByUsername = async (username) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length) {
      console.log('found the user: ', rows[0]);
      return rows[0];
    }
    return { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

User.findById = async (id) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  try {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [idBuffer]);

    if (rows.length) {
      const user = {
        ...rows[0],
        id: rows[0].id.toString('utf-8')
      };

      delete user.password;

      return user;
    }
    throw { kind: 'not_found' };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

User.getAll = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');

    if (rows.length) {
      const data = rows.map((user) => {
        user.id = user.id.toString('utf8');
        user.password = undefined;
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

User.updateById = async (id, user) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  try {
    const [rows] = await pool.execute(
      'UPDATE users SET name = ?, date_of_birth = ?, roadmap_id = ? WHERE id = ?',
      [user.name, user.date_of_birth, user.roadmap_id, idBuffer]
    );

    if (rows.affectedRows == 0) {
      throw { kind: 'not_found' };
    }

    return { id, ...user };
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

User.delete = async (id) => {
  const idBuffer = Buffer.alloc(18, id, 'utf-8');

  try {
    const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [idBuffer]);
    if (rows.affectedRows == 0) {
      throw { kind: 'not_found' };
    }

    console.log('deleted user with id: ', id);
    return rows;
  } catch (err) {
    console.log('error: ', err);
    throw err;
  }
};

module.exports = User;
