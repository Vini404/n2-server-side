import express from 'express';
import componenteRoutes from './routes/componenteRoutes.js';

const app = express();
app.use(express.json());
app.use('/componentes', componenteRoutes);

export default app;
