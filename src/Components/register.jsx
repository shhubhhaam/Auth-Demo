import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SignInWithGoogle from "./SignInWithGoogle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Access the user from the returned credential
      const user = userCredential.user;
  
      // Save additional user data to Firestore
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          photo:""
        });
      }
  
      // Navigate to the desired page after successful signup
      navigate("/profile");
  
    } catch (error) {
      // Set a user-friendly error message
      setError(error.message || "An error occurred during signup");
      console.error("Signup error: ", error);
    }
  };
  

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-6 text-left">
        Create your account
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        {/* ------------------- */}
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm mb-2 text-left"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            id="firstName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* ------------ */}
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm    mb-2 text-left"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* ---------- */}
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
        {/* ----------- */}
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm mb-2 text-left"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="  appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none  d-flex"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white    py-2 px-4 rounded focus:outline-none  w-100"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <SignInWithGoogle/>
      <p className='text-right mt-3'>Already have an account?<Link to='/login'>Login</Link></p>

      {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
    </div>
  );
};

export default SignupForm;
