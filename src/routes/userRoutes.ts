import express from "express";
import { createUser, deleteUser, getById, updateUser } from "../controller/UserController";
import { createSchool } from '../controller/schoolController';

const router = express.Router();

router.get('/user/:id', getById);
router.post('/user', createUser);
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

router.post('/school', createSchool)

export default router;