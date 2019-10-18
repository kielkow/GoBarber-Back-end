import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Monica Silva',
    email: 'monica@fiorifer.com.br',
    password_hash: '2',
  });

  return res.json(user);
});

export default routes;
