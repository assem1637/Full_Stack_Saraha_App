import { Router } from 'express';
import { Login, handleLogin } from '../controllers/login.controller.js'



const router = Router();

router.get('/login', Login);
router.post('/handleLogin', handleLogin);

export default router;