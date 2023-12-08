import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from "../Firebase/Firebase.init";
export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createAccount = (email, password) => {

      setloading(true)
      return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {

      return signInWithPopup(auth, googleProvider);
  }


  const signIn = (email, password) => {

      setloading(true)
      return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (userInfo) => {

      return updateProfile(auth.currentUser, userInfo)
  }

  const logOut = () => {
      setloading(true)
     return signOut(auth)
  }


  useEffect(()=>{

      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
          
          setUser(currentUser);
          setloading(false);
          
          return () => {

              unSubscribe()
          }
      })

  },[])


  const AuthInfo = {
    createAccount,
    googleLogin,
    signIn,
    logOut,
    updateUser,
    loading,
    user

}







  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
      {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
