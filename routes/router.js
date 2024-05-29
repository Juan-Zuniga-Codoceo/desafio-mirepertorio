import express from 'express';
import { getAllSongs, createSong, editSong, removeSong } from '../controllers/Controller.js';

const router = express.Router();

router.get('/api/canciones', getAllSongs);
router.post('/api/cancion', createSong);
router.put('/api/cancion/:id', editSong);
router.delete('/api/cancion', removeSong);

export default router;
