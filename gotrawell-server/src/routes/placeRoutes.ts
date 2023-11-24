import express from 'express';
import * as placeController from '../controllers/placeController';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/all', placeController.getAllPlaces);
router.get('/:placeId', placeController.getPlaceById);
router.post('/new', placeController.createPlace);

export default router;
