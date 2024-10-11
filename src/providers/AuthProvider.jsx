import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState("");
    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signIn user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signOut 
    const logOut = () => {
        return signOut(auth);
    }
    // onAuthState 
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
