import express from 'express';
import { getUser } from '../controllers/users.controller';

const routes = express.Router();

routes.get('/', getUser);

export { routes as usersRoutes };
