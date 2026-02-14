

import FullLogo from "../layouts/full/shared/logo/FullLogo";
import AuthRegister from "../authforms/AuthRegister";
import { Link } from "react-router";

const gradientStyle = {
  background: "linear-gradient(to right,rgb(0, 0, 0),rgb(92, 90, 90),rgb(168, 168, 168),rgb(243, 243, 243))",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  height: "100vh",
  overflow: "hidden",
};

export default function Register(){
  return (
    <div style={gradientStyle} className="relative overflow-hidden h-screen">
      <div className="flex h-full justify-center items-center px-4">
        <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative break-words md:w-96 w-full border-none">
          <div className="flex h-full flex-col justify-center gap-2 p-0 w-full">
            <div className="mx-auto">
              <FullLogo />
            </div>
            <p className="text-2xl text-center text-black my-3">
              สมัครสมาชิก
            </p>
            <AuthRegister />
            <div className="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
              <p>Already have an Account?</p>
              <Link to="/auth/login" className="text-primary text-sm font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

