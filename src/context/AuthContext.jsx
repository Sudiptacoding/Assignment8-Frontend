import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../firebase/firebase.config';
export const UserProvider = createContext(null)

const AuthContext = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)
    const [userPhoto, setUserPhoto] = useState('')

    const handelGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoader(false)
        });
        return () => {
            return unSubscribe()
        }
    }, [])



    const sendValue = {
        createUser,
        signIn,
        logOut,

        // 
        user,
        loader,
        setUserPhoto,
        userPhoto,
        handelGoogle

    }
    return (
        <UserProvider.Provider value={sendValue}>
            {children}
        </UserProvider.Provider>
    );
};

export default AuthContext;