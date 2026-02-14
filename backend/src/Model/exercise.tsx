import { Schema, model, connect } from 'mongoose';
export type ExerciseStatus = "active" | "close" | "pending" | "cancel"|"resolved";
export type ExerciseCatagory = "ประเภทแขน" | "ประเภทขา" | "ประเภทออก" | "ประเภทหลัง"|"ประเภทหน้าท้อง";

export interface IExercise {
    exercisename: string;
    exercisedescription: string;
    exerciseimage: string;
    exercisestatus: ExerciseStatus;
    exercisecatagory:ExerciseCatagory;
    created_at:Date;
    updated_at:Date;
    deleted_at:Date;
}

export const exercise = new Schema<IExercise>({
    exercisename:{
        type:String,
        required:[true, 'กรุณาระบุชื่อการออกกำลังกาย'],
    },
    exercisedescription:{
        type:String,
        required:[true, 'กรุณาระบุรายละเอียด'],
        maxleng:10000
    },
    // path images
    exerciseimage:{
        type:String,
        required:[true, 'กรุณาใส่รูปภาพ'],
    },
    // status หลังจากสร้างข้อมูลจะเริ่มที่ active
    exercisestatus: {
        type: String,
        enum: ["active", "close", "pending", "cancel","resolved"], // จำกัดค่าที่รับได้
        default: "pending",
        required: [true, 'กรุณาสถานะ']
    },
    exercisecatagory:{
        type:String,
        required: [true, 'กรุณาระบุประเภท']
    },
    created_at:{
        type:Date,
        timestamps: true
    },
    updated_at:{
        type:Date,
        timestamps: true
    },
    deleted_at:{
        type:Date,
        timestamps: true
    }
})
const Exercise = model('user', exercise);
export default Exercise;