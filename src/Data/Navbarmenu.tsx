export interface Navmenu{
    id:number;
    label:String;
    link:String
    element:String
}

export const Navbarmenu = [
    {id:1 , label:"หน้าแรก" , link:"/" , element:"navbar"},
    {id:2 , label:"เกี่ยวกับเรา" , link:"/about" , element:"about"},
    {id:3 , label:"ติดต่อเรา" , link:"/contact" , element:"contact"},
    {id:4 , label:"สมัครสมาชิก" , link:"/register" , element:"register"},
    {id:4 , label:"เข้าสู่ระบบ" , link:"/login" , element:"login"},
]