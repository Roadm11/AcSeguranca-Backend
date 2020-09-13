import { Router } from 'express';

import PetController from './controllers/PetController';

const routes = Router();

const petController = new PetController();

routes.get('/pets', petController.index);
routes.post('/pets', petController.create);
routes.put('/pets/:id', petController.update);
routes.delete('/pets/:id', petController.delete);

export default routes;
