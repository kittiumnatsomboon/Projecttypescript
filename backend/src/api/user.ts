import express from 'express';
import { Router, type Request, type Response, type Application } from 'express';
import mongoose from '../config/database.config.js';
const router = Router();
import User from '../Model/usermode.js';
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
})

export default router;
