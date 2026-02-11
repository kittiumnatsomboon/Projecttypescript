import express from 'express';
import {Router, type Request, type Response, type Application } from 'express';
import pool from '../config/database.config.js';
const router = Router();
router.get('/',async(req:Request,res:Response)=>{
    try {
    // The query method returns a tuple: [rows, fields]
    // We cast the rows to our IUser interface array using generics
    const [rows] = await pool.query("SELECT * FROM users");
    console.log(rows)
    // Send the results as JSON in the Express response
    res.status(200).json(rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
})

export default router;
