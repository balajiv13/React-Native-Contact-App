import React, {createContext, useReducer} from "react";
import auth from "./reducers/auth";
import authInitState from "./initialsStates/authStates";
import contacts from "./reducers/contact";
import contactInitState from "./initialsStates/contactsInitialStates";


export const GlobalContext = createContext({})

const GlobalProvider = ({children}: any)=>{

    const [authState, authDispatch] = useReducer(auth , authInitState)
    const [contactState, contactDispatch] = useReducer(contacts , contactInitState )

    return <GlobalContext.Provider value={{authState, contactState, authDispatch, contactDispatch}}>{children}</GlobalContext.Provider>
}

export  default GlobalProvider;