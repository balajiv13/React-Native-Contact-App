import React, { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator"
import HomeNavigator from "./HomeNavigator"
import DrawerNavigator from "./DrawerNavigator"
import { GlobalContext } from "../context/Provider"

const AppNavContainer = ()=>{

    const {authState:{isLoggedIn}}:any = useContext(GlobalContext)
    console.log('****STATELogin::::',isLoggedIn);
return (
    <NavigationContainer>
        
        {/* <AuthNavigator /> */}

        {/* <HomeNavigator /> */}
        {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator /> }

       
    </NavigationContainer>
)
}

export default AppNavContainer