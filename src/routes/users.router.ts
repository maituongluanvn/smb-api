import express from 'express';
import { getUsers } from '../controllers/users.controller';

const routes = express.Router();

routes.get('/', getUsers);

export { routes as usersRoutes };
