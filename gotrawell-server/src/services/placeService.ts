import Place from '../models/Place';

export const createPlace = async (name: string, country: string, photo: string) => {
  return Place.create({ name, country, photo });
};

export const getPlaceById = async (id: number) => {
  return Place.findByPk(id);
};

export const getAllPlaces = async () => {
  return Place.findAll();
};
