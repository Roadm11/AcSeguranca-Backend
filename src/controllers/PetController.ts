import { Request, Response } from 'express';
import Pet from '../schemas/Pet';

import AppError from '../errors/AppError';

import CreatePetService from '../services/CreatePetService';

class PetsController {
  async index(request: Request, response: Response) {
    const pets = await Pet.find();

    return response.status(200).json(pets);
  }

  async create(request: Request, response: Response) {
    const { name, animal } = request.body;

    const createPetService = new CreatePetService();

    const pet = await createPetService.execute({
      name,
      animal,
    });

    return response.status(200).json({
      _id: pet.id,
      name: pet.name,
      animal: pet.animal,
    });
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    let { name, animal } = request.body;

    const pet = await Pet.findById(id);

    if (!pet) {
      throw new AppError('Pet not found');
    }

    name = name ? name : pet.name;
    animal = animal ? animal : pet.animal;

    await Pet.updateOne(
      {
        _id: id,
      },
      { name, animal }
    );

    return response.status(200).json({
      _id: id,
      name,
      animal,
    });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await Pet.findByIdAndDelete(id);

    return response.status(200).json({ success: 'Register deleted' });
  }
}

export default PetsController;
