import express from 'express';
import * as placeController from '../controllers/placeController';

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/new', placeController.createPlace);
router.get('/all', placeController.getAllPlaces);
router.get('/:placeId', placeController.getPlaceById);

export default router;
