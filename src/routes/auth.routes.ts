console.log('auth routes loaded');

import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller';
import { loginSchema } from '../validators/auth.validator';
import { validate } from '../middlewares/validate.middleware';

const router = Router()

/**
 * @openapi
 * /auth/login:
 *  post:
 *    summary: User Login
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *               username:
 *                 type: string
 *               password: 
 *                 type: string
 *    responses:
 *      200: 
 *        description: Login Successful, returns JWT
 *      401:
 *        description: Wrong Credentials  
 */
router.post('/login',validate(loginSchema), authCtrl.login);

router.post('/google-auth', authCtrl.googleLogin);
export default router

console.log(router.stack.map((l: any) => `${Object.keys(l.route?.methods ?? {})} ${l.route?.path}`));