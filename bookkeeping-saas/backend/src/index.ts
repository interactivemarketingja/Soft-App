import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import { setRoutes } from './routes/index';
import { Logger } from './utils/logger';

config();

const app = express();
const logger = new Logger();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setRoutes(app);

mongoose.connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    logger.info('Connected to the database');
    app.listen(PORT, () => {
        logger.info(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    logger.error('Database connection error:', err);
});