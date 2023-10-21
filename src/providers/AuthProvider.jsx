import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
     setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    setLoading(true)
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
       
        setUser(currentUser);

        setLoading(false);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // console.log(user, "user paici");
  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    googleSignIn,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
