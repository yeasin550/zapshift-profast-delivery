
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContex";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
const provider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser || null);
                // console.log("user info", currentUser)
                setLoading(false);
        });

        return() => {
            unSubscribe()
        }

    }, [])

  const authInfo = {
   user,
   setUser,
   loading,
   setLoading,
   createUser,
   signIn,logOut,
   signInWithGoogle
  };

  return <AuthContext value={authInfo}>
              {children}
    </AuthContext>;
};
export default AuthProviders;
