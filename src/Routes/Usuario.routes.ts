import  express from 'express';
import {createUser, deleteUser, getUsers, loginUser, updateUser} from '../Controllers/Usuario.controller';


const router = express.Router();



router.post('/new', createUser);
router.get('/', getUsers);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/login', loginUser);
export default router;
