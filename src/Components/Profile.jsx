import React, { useEffect, useState } from 'react'
import { auth, db } from './firebase'
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore"

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails({ ...docSnap.data(), photoURL: user.photoURL });
            console.log(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("User is not logged in");
        navigate("/login");
      }
    };
  
    fetchData();
  }, []);
  

  async function handleLogout() {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      setUserDetails(null);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  
  return (
    <div>
      {userDetails ? (
        <div className="flex items-center justify-center h-screen bg-gray-100 ">
          <div className="text-center border rounded-lg p-10 shadow-inner">
          <div className='d-flex justify-content-center align-items-center'>
            <img src={userDetails.photo} className="rounded-full" alt=""/>
          </div>
          <h3>Welcome {userDetails.name}...</h3>
          <div>
            <p>Email: {userDetails.email}</p>
            <p>Name: {userDetails.name}</p>
          </div>
          <button className='btn btn-primary' onClick={handleLogout}>
            Logout
          </button>

          </div>
        </div>
      ) : ( 
        <p>Loading.....</p>
      )}
      
    </div>
  );
};

export default Profile
