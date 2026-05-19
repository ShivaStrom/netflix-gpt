import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"></img>
      </div>
      <form className="absolute px-8 py-6  bg-black  mx-auto my-40 right-0 left-0 w-3/12 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&  <input
          type="text"
          placeholder="Full Name"
          className="w-full py-3 my-4 px-2 bg-gray-700"
        ></input>}
        <input
          type="text"
          placeholder="Email"
          className="w-full py-3 my-4 px-2 bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="w-full py-3 my-4 px-2 bg-gray-700"
        ></input>
        <button className="w-full bg-red-800 py-2 my-4 rounded-lg">
          {isSignInForm ? "Sign Un" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-2" onClick={handleSignInToggle}>
          {isSignInForm
            ? "New to netflix? Sign Up now"
            : "You Already have account, Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
