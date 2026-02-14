import { Button, Label } from "flowbite-react";
import { useNavigate } from "react-router";


const AuthRegister = () => {
  const navigate = useNavigate();
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
     navigate("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="name" />
          </div>
          <input
            id="name"
            type="text"
            required
            className="px-3 py-2 border border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd" />
          </div>
          <input
            id="emadd"
            type="email"
            required
            className="px-3 py-2 border border-gray-300 w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2 block">
            <Label htmlFor="userpwd" />
          </div>
          <input
            id="userpwd"
            type="password"
            required
            className="form-control form-rounded-xl"
          />
        </div> 
        <Button color={'primary'} type="submit" className="w-full">Sign Up</Button> 
        
      </form>
    </>
  )
}

export default AuthRegister
