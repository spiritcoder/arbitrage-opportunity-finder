import express from 'express'
const router = express.Router();
import { validateRequest } from '../middlewares/validate-request';
import * as v from '../validators/index';
import { applyGuard } from '../utils';
/*
|-------------------------------------------------------------------------------
| Controller Import
|-------------------------------------------------------------------------------
*/
import {adminController, arbiterFinderController} from "../controllers"


/*
|-------------------------------------------------------------------------------
| Route Declearation
|-------------------------------------------------------------------------------
*/


/*----------Admin Routes--------------------*/
router.post('/addExchange', validateRequest, adminController.addExchange);
router.post('/editExchange', validateRequest, adminController.editExchange);
router.post('/deleteExchange', validateRequest, adminController.deleteExchange);
router.post('/updateExchangeStatus', validateRequest, adminController.changeExchangeStatus);

/*----------Arbiter Routes--------------------*/
router.post('/findArbiter', validateRequest, arbiterFinderController.findArbiter)
router.get('/fetchExchanges', validateRequest, arbiterFinderController.fetchExchanges)



/*
|-------------------------------------------------------------------------------
| Route Export
|-------------------------------------------------------------------------------
*/
export { router as arbiterRoutes }