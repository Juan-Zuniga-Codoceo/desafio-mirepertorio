import pool from '../config/db.js';

export const getSongs = async () => {
  const res = await pool.query('SELECT * FROM canciones');
  return res.rows;
};

export const addSong = async (titulo, artista, tono) => {
  const res = await pool.query('INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *', [titulo, artista, tono]);
  return res.rows[0];
};

export const updateSong = async (id, titulo, artista, tono) => {
  const res = await pool.query('UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *', [titulo, artista, tono, id]);
  return res.rows[0];
};

export const deleteSong = async (id) => {
  const res = await pool.query('DELETE FROM canciones WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
