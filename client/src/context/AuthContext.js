 // creatin local context
 
 import { createContext } from "react";

 // empty function to init login and logout
 function emptyOne() {}

 export const AuthContext = createContext({
    token:null,
    userId:null,
    login:emptyOne,
    logout: emptyOne,
    isAuthenticated: false
 })