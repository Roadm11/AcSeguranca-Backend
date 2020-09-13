import { Router } from 'express';

import PetController from './controllers/PetController';

const routes = Router();

const petController = new PetController();

routes.get('/api/pets', petController.index);
routes.post('/api/pets', petController.create);
routes.put('/api/pets/:id', petController.update);
routes.delete('/api/pets/:id', petController.delete);

export default routes;
