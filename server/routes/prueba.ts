import {Router} from 'express';
import { prueba } from '../controllers/prueba';

const router = Router();

router.get('/', prueba);

export default router;