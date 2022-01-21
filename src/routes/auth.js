import { Router } from 'express';
import * as CreateUser from '../controllers/Auth';
const router = Router();

router.post('/registro', CreateUser.SignUp, (req, res) => {
    res.send('Hello World');
});
router.post('/logins', CreateUser.Signin);

export default router;