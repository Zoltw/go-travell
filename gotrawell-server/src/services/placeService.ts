import Place from '../models/Place';

export const createPlace = async (name: string, country: string, photo: string): Promise<Place | null> => {
  return Place.create({ name, country, photo });
};

export const getPlaceById = async (id: number): Promise<Place | null> => {
  return Place.findByPk(id);
};

export const getAllPlaces = async (): Promise<Array<Place>> => {
  return Place.findAll();
};
