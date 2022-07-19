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
import {authController, emailVerificationController, passwordResetController} from "../controllers"


/*
|-------------------------------------------------------------------------------
| Route Declearation
|-------------------------------------------------------------------------------
*/

/*----------Auth Routes--------------------*/
router.post('/signUp', v.signupValidator,validateRequest,authController.signUp);
router.post('/logIn', v.loginValidator, validateRequest, authController.logIn);
router.post('/signOut', authController.signOut);

/*----------Email Verification Service Routes--------------------*/
router.post('/initiateEmailVerification', applyGuard, v.emailValidator, validateRequest, emailVerificationController.initiateEmailVerification);
router.post('/finalizeEmailVerification', applyGuard, v.finalizeVerificationValidator, validateRequest, emailVerificationController.finalizeEmailVerification);

/*----------Password Service Routes--------------------*/
router.post('/initiatePasswordReset', applyGuard, v.emailValidator, validateRequest, passwordResetController.initiatepasswordReset);
router.post('/finalizePasswordReset', applyGuard, v.finalizePasswordResetValidator, validateRequest, passwordResetController.finalizePasswordReset);
router.post('/changePassword', applyGuard, v.changePasswordValidator, validateRequest, passwordResetController.changePassword);



/*
|-------------------------------------------------------------------------------
| Route Export
|-------------------------------------------------------------------------------
*/
export { router as authRoutes }