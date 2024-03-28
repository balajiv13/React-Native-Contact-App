import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";


const DrawerNavigator = ()=>{
    const Drawer = createDrawerNavigator()
return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeNavigator} options={{title: 'Home'}} />  
    </Drawer.Navigator>
)
}

export default DrawerNavigator