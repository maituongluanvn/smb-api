import express from 'express';
import { getBlog } from '../controllers/speding';

const routes = express.Router();

routes.get('/', getBlog);

export { routes as spendingRoutes };
