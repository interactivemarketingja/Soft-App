import express from 'express';
import { json } from 'body-parser';
import { setRoutes } from './routes/index';
import { Logger } from './utils/logger';

const app = express();
const logger = new Logger();

// Middleware
app.use(json());

// Set up routes
setRoutes(app);

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500).send('Something went wrong!');
});

export default app;