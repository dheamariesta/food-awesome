import express from 'express';
import restaurentController from '../controllers/restaurent';

const router = express.Router();

/* GET index page. */
router.get('/', restaurentController.getRestaurent);
router.post('/', restaurentController.postRestaurent);
router.put('/', restaurentController.updateRestaurent);
router.delete('/', restaurentController.deleteRestaurent);

export default router;
