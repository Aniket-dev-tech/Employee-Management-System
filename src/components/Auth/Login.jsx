import React, {useState} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("Email is", email);
    console.log("Password is", password);
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="flex flex-col items-center justify-center ">
          <input required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className="text-white outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full"
            type="email"
            placeholder="Enter your email"
          />
          <input required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="text-white outline-none bg-transparent mt-3 placeholder:text-gray-400  border-2 border-emerald-600 text-xl py-3 px-5 rounded-full"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white outline-none placeholder:text-white bg-emerald-600 text-xl py-3 px-5 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
