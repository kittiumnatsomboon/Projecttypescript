import { Schema, model, connect } from 'mongoose';
export type DayExercise = "วันอาทิตย์" | "วันจันทร์" | "วันอังคาร" | "วันพุทธ" | "วันพฤหัส"|
"วันศุก" | "วันเสาร์";

export interface IDayExercise{
    // วันที่ออกกำลังกาย
    Dayofexercise:String;
    // วันหยุด
    Dayoff:String;
    // เวลา
    Dayoftime:Date;
}