// controllers/users.js

import db from '../libs/db.js';

export async function updateUser(req, res) {
  const { id, name } = req.body;

  const query = `UPDATE users SET name = '${name}' WHERE id = ${id}`;

  try {
    await db.query(query);
    res.send('User updated successfully');
  } catch (err) {
    console.log(err);
    res.send('Update failed');
  }
}
