import { Router } from 'express';
import { Register, handleRegister } from '../controllers/register.controller.js'
import validation from '../middleware/validation/valid.js';


const router = Router();

router.get('/register', Register);
router.post('/handleRegister', validation, handleRegister);

export default router;