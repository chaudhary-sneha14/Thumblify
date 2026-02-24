import express from 'express'
import { login, logoutUser, registerUser, verify } from '../Controller/AuthController.js';

const AuthRouter=express.Router();
AuthRouter.post('/register',registerUser);
AuthRouter.post('/login',login);
AuthRouter.get('/verify',verify);
AuthRouter.post('/logout',logoutUser);

export default AuthRouter
