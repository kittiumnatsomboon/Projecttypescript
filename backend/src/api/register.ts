import Express from "express";
import { Router, type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import User from "../Model/usermode.js";
const router = Router();

interface Createuserbody {
    fullname: string,
    email: string,
    password: string
}


router.post('/', async (req: Request<{}, {}, Createuserbody>, res: Response) => {
    const { fullname, email, password } = req.body;
    try {
        const checkemail = await User.find({ email });
        if (checkemail.length > 0) {
            return res.json({
                statusCode: 409,
                message: "This name is already taken.",
            });
        }
        // ตั่งค่าพาสเวอร์ดให้ถูกเข้ารหัส
        const saltRounds = 10; 
        // เช็กอีเมลล์และชื่อซ้ำ
        const hashedPassword= await bcrypt.hash(password, saltRounds);
        await User.insertOne({fullname,email,password:hashedPassword});
        res.status(201).json({message:"success"});
    } catch (error) {
        res.json({ message: `Database connection error ${error}` })
    }
})

export default router;
