import React, { useState } from "react";

function Login() {
  const [currrentState, SetCurrentState] = useState("Sign Up");

  const onSubmitHandle = async (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandle}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4  text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currrentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currrentState === "Login" ? (
        ""
      ) : (
        <input
          required
          type="text"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
        />
      )}

      <input
        required
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Email"
      />

      <input
        required
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password?</p>
        {currrentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => SetCurrentState("Sign Up")}
          >
            Create account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => SetCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currrentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
