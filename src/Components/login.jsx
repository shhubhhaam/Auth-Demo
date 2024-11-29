import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignInWithGoogle from "./SignInWithGoogle";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  // const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged in succesfully!"); 
      toast.success("User Logged in Successfully!", {
        position: "top-center",
        autoClose: 3000, // Optional: closes the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      navigate("/profile");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });      
    }
  }
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded px-8 pt-6 pb-8 mb-4 m-10">
      <h2 className="text-2xl mb-6 text-left">Login to CryptoSim</h2>
      <form onSubmit={handleLogin} className="mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm text-left font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm mb-2 text-left"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none  d-flex"
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-100 "
          type="submit"
        >
          Login with Email
        </button>
      </form>
      <SignInWithGoogle />

      <p className="text-right mt-3">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};
