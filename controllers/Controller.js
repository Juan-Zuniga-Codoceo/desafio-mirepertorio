import { getSongs, addSong, updateSong, deleteSong } from '../models/queries.js';

export const getAllSongs = async (req, res) => {
  try {
    const songs = await getSongs();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createSong = async (req, res) => {
  try {
    const { titulo, artista, tono } = req.body;
    const newSong = await addSong(titulo, artista, tono);
    res.status(201).json(newSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const editSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const updatedSong = await updateSong(id, titulo, artista, tono);
    res.json(updatedSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeSong = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedSong = await deleteSong(id);
    res.json(deletedSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
