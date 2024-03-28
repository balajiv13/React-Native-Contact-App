import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LOGIN, REGISTER } from "../constants/routesName";
import Register from "../screens/register";
import Login from "../screens/login";


const AuthNavigator = ()=>{
    const AuthStack = createNativeStackNavigator()
return (
    <AuthStack.Navigator>
        <AuthStack.Screen name={LOGIN} component={Login} options={{title:LOGIN}}/>  
        {/* <AuthStack.Screen name="Contacts" component={Contacts}  options={{title:"Contacts", headerBackTitleVisible: false}} /> */}
        <AuthStack.Screen name={REGISTER} component={Register} options={{title:REGISTER}}/> 
       
    </AuthStack.Navigator>
)
}

export default AuthNavigator