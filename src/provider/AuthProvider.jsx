
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext= createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);




const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading,setloading] =useState(true);

    console.log(user);
    
const createUser = (email,password) =>{
    setloading(true);
    return createUserWithEmailAndPassword(auth,email,password);

}

const signIn =(email,password) =>{
    setloading(true);
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () =>{
        
    return signOut(auth)
}


useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser);
        setloading(false);

    });
    return ()=>{
        unsubscribe();
    };

},[])


    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setloading
    }


    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;