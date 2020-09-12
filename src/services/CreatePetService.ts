import Pet from '../schemas/Pet';

import AppError from '../errors/AppError';

interface InterfaceRequest {
  name: string;
  animal: 'cachorro' | 'gato';
}

class CreatePetService {
  public async execute({ name, animal }: InterfaceRequest) {
    const pet = await Pet.create({
      name,
      animal,
    });

    return pet;
  }
}

export default CreatePetService;
