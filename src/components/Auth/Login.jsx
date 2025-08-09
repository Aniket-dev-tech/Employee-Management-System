import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email is", email);
    console.log("Password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-black p-4">
      <div className="w-full max-w-md bg-black/40 backdrop-blur-md border border-emerald-500 rounded-2xl shadow-2xl p-8 sm:p-10">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Login
          </h1>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full text-white outline-none bg-black/30 placeholder:text-gray-400 border border-emerald-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 text-lg sm:text-xl py-3 px-5 rounded-full transition-all"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full text-white outline-none bg-black/30 placeholder:text-gray-400 border border-emerald-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500 text-lg sm:text-xl py-3 px-5 rounded-full transition-all"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-2 w-full text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all text-lg sm:text-xl py-3 px-5 rounded-full shadow-lg shadow-emerald-500/20">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
