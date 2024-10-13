import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function AuthProvider({ children }) {
    const [user, setUser] = useState("");
    const [loading,setloading] = useState(true);
    // create user 
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signIn user
    const signInUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // singIn with google 
    const signInWithGoogle = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // signIn with github
    const signInWithGithub = () => {
        setloading(true);
        return signInWithPopup(auth, githubProvider);
    }
    // signOut 
    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }
    // onAuthState 
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, currentUser => {
           setUser(currentUser);
           setloading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
