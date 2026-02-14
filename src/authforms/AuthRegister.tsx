import { useState } from "react";
import { Link, useNavigate } from "react-router";
import * as Yup from 'yup';
import Modal from "react-modal";
import Modalterm, { CustomStyles  } from "../components/Modal";
// ยังไม่ได้แก้
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});




const AuthRegister = () => {
  const [openmodalterm, setopenmodal] = useState(false);
  function openModal() {
        setopenmodal(true);
    }
    function closeModal() {
        setopenmodal(false);
    }

  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <div className="mb-2 block text-black">
            <label htmlFor="fullname">ชื่อ-นามสกุล</label>
          </div>
          <input
            id="fullname"
            type="text"
            placeholder="กรุณาระบุชื่อ-นามสกุล"
            className="px-3 py-2 border text-black border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block text-black">
            <label htmlFor="email">ที่อยู่อีเมลล์</label>
          </div>
          <input
            id="email"
            type="email"
            placeholder="กรุณาระบุที่อยู่อีเมล์"
            className="px-3 py-2 border border-gray-300 text-black w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <div className="mb-2 block text-black">
            <label htmlFor="password">รหัสผ่าน</label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="กรุณาระบุรหัสผ่าน"
            className="px-3 py-2 border text-black border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <div className="mb-2 block text-black">
            <label htmlFor="confirmpassword"></label>ยืนยันรหัสผ่าน
          </div>
          <input
            id="confirmpassword"
            type="password"
            placeholder="กรุณาระบุรหัสผ่านยืนยันอีกครั้ง"
            className="px-3 py-2 border text-black border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 rounded focus:ring-blue-500" />
            <span className="ml-2 text-black">
              ข้าพเจ้าได้อ่านและยอมรับ <Link to="#" onClick={openModal} className="text-blue-500">[ข้อกำหนดและเงื่อนไขการใช้บริการ]</Link> 
            </span>
          </label>
          {openmodalterm &&
            <div>
              <Modal 
              isOpen={openmodalterm}
              style={CustomStyles}
              onRequestClose={closeModal}
              >
                <Modalterm/>
              </Modal>
            </div>
          }
        </div>
        <button type="submit" className="w-full bg-sky-500 rounded-sm pt-2 pb-2 hover:bg-sky-700">สมัครสมาชิก</button>

      </form>
    </>
  )
}

export default AuthRegister
