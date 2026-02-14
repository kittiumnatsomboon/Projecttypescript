import { useState } from "react";
import { Link } from "react-router";
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from "formik"
import Modal from "react-modal";
import Modalterm, { CustomStyles } from "../components/Modal";
import Register from "../Auth/registerapi";

// formik yup validate
const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'อักษรขั้นต่ำ 2 ตัวอักษร')
    .max(50, 'อักษรสูงสุด 50 ตัวอักษร')
    .required('กรุณาระบุข้อมูล'),
  email: Yup.string()
    .email('รูปแบบอีเมลล์ไม่ถูกต้อง')
    .required('กรุณาระบุข้อมูล'),
  password: Yup.string()
    .min(2, 'อักษรขั้นต่ำ 2 ตัวอักษร')
    .max(50, 'อักษรสูงสุด 50 ตัวอักษร')
    .matches(/[a-z]/, 'รหัสผ่านต้องมีตัวอักษรตัวเล็กอย่างน้อย 1 ตัวอักษร')
    .matches(/[A-Z]/, 'รหัสผ่านต้องมีตัวอักษรตัวใหญ่อย่างน้อย 1 ตัวอักษร')
    .matches(/[0-9]/, 'รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัวอักษร')
    .matches(/[^a-zA-Z0-9]/, 'ตัวอักษรต้องมีสัญลักษณ์พิเศษอย่างน้อย 1 ตัวอักษร')
    .required('กรุณาระบุข้อมูล'),
  confirmpassword: Yup.string()
    .min(2, 'อักษรขั้นต่ำ 2 ตัวอักษร')
    .max(50, 'อักษรสูงสุด 50 ตัวอักษร')
    .matches(/[a-z]/, 'รหัสผ่านต้องมีตัวอักษรตัวเล็กอย่างน้อย 1 ตัวอักษร')
    .matches(/[A-Z]/, 'รหัสผ่านต้องมีตัวอักษรตัวใหญ่อย่างน้อย 1 ตัวอักษร')
    .matches(/[0-9]/, 'รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัวอักษร')
    .matches(/[^a-zA-Z0-9]/, 'ตัวอักษรต้องมีสัญลักษณ์พิเศษอย่างน้อย 1 ตัวอักษร')
    .oneOf([Yup.ref('password')], 'รหัสผ่านต้องตรงกันกับข้างบน')
    .required('กรุณาระบุข้อมูล'),
  agree: Yup.bool()
    .oneOf([true], 'กรุณากดปุ่มยิมยอม')
    .required('กรุณากดยิมยอม'),
});



const AuthRegister = () => {
  const [openmodalterm, setopenmodal] = useState(false);
  const [message , setmessage] = useState();
  function openModal() {
    setopenmodal(true);
  }
  function closeModal() {
    setopenmodal(false);
  }

  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          confirmpassword: "",
          agree:"",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          Register(values)
          
        }}
      >
        {({  }) => (
          <Form >
            <div className="mb-4">
              <div className="mb-2 block text-black">
                <label htmlFor="fullname">ชื่อ-นามสกุล</label>
              </div>
              <Field
                id="fullname"
                name="fullname"
                type="text"
                placeholder="กรุณาระบุชื่อ-นามสกุล"
                className="px-3 py-2 border text-black border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="fullname" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <div className="mb-2 block text-black">
                <label htmlFor="email">ที่อยู่อีเมลล์</label>
              </div>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="กรุณาระบุที่อยู่อีเมล์"
                className="px-3 py-2 border border-gray-300 text-black w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />

            </div>

            <div className="mb-4">
              <div className="mb-2 block text-black">
                <label htmlFor="password">รหัสผ่าน</label>
              </div>
              <Field
                id="password"
                type="password"
                name="password"
                placeholder="กรุณาระบุรหัสผ่าน"
                className="px-3 py-2 border text-black border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />

            </div>

            <div className="mb-4">
              <div className="mb-2 block text-black">
                <label htmlFor="confirmpassword"></label>ยืนยันรหัสผ่าน
              </div>
              <Field
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="กรุณาระบุรหัสผ่านยืนยันอีกครั้ง"
                className="px-3 py-2 border text-black border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="confirmpassword" component="div" className="text-red-500" />

            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <Field type="checkbox" name="agree" className="form-checkbox h-5 w-5 rounded focus:ring-blue-500" />
                <span className="ml-2 text-black">
                  ข้าพเจ้าได้อ่านและยอมรับ <Link to="#" onClick={openModal} className="text-blue-500">[ข้อกำหนดและเงื่อนไขการใช้บริการ]</Link>
                </span>
              </label>
              <ErrorMessage name="agree" component="div" className="text-red-500" />
              

              {openmodalterm &&
                <div>
                  <Modal
                    isOpen={openmodalterm}
                    style={CustomStyles}
                    onRequestClose={closeModal}
                  >
                    <Modalterm />
                  </Modal>
                </div>
              }
            </div>
            <button type="submit" className="w-full bg-sky-500 rounded-sm pt-2 pb-2 hover:bg-sky-700">สมัครสมาชิก</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default AuthRegister
