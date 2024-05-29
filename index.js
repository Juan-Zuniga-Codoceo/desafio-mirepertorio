import express from 'express';
import routes from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('views'));

// Routes
app.use('/', routes);

app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));
