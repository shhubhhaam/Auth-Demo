import { auth, db } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"

function SignInWithGoogle() {
  
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider); // Wait for the sign-in to complete
  
      // Check if the user is authenticated
      if (result.user) {
        const user = result.user;
        console.log(result);
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        });
        
        toast.success("User Registered Successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
  
        // Redirect to profile after successful registration
        navigate("/profile");
      } else {
        console.error("Authentication failed: No user object found.");
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      setError(error.message);
    }
  };
  
  return (
  <>
    <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or sign up with</span>
        </div>
    </div>
      <button
        className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded  flex items-center justify-center"
        onClick={handleGoogleLogin}
        >
        <FcGoogle className="w-5 h-5 mr-2" />
        Login with Google
      </button>
      {error && (
        <p className="text-red-500 text-xs italic mt-4">{error}</p>
      )}
  </>
  )
}

export default SignInWithGoogle
