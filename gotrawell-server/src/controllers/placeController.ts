import { Request, Response } from 'express';
import * as placeService from '../services/placeService';

export const createPlace = async (req: Request, res: Response) => {
  const { name, country, photo } = req.body;
  try {
    const newPlace = await placeService.createPlace(name, country, photo);
    res.status(201).json(newPlace);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const getPlaceById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const place = await placeService.getPlaceById(id);
    if (place) {
      res.json(place);
    } else {
      res.status(404).json({ message: 'Place not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const getAllPlaces = async (req: Request, res: Response) => {
  try {
    const places = await placeService.getAllPlaces();
    res.json(places);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
};
