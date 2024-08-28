import { useState } from "react";
import Header from "./Header"

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => [
    setIsSignIn(!isSignIn)
  ]

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg' />
      </div>
      <from className="absolute w-3/12 p-12 my-36 bg-gray-950 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl mb-5">{isSignIn ? "Sign In" : "Sign Up" }</h1>
        { !isSignIn && (<input type="text" placeholder="Full Name" className="p-3 my-3 w-full bg-gray-700" />)}
        <input type="text" placeholder="Email Address" className="p-3 my-3 w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-3 my-3 w-full bg-gray-700" />
        <button className="p-3 my-6 bg-red-600 w-full rounded-lg" >{isSignIn ? "Sign In" : "Sign Up" }</button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already registerd? Sign In now." }</p>
      </from>
    </div>
  )
}

export default Login