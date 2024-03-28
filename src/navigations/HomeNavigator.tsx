import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {ABOUT_US, CONTACT_DETAILS, CONTACT_LISTS, CREATE_CONTACT, SETTINGS} from '../constants/routesName'
import Contacts from "../screens/contacts";
import AboutUs from "../screens/aboutUs";
import ContactDetails from "../screens/contactDetails";
import CreateContact from "../screens/createContact";
import Settings from "../screens/settings";


const HomeNavigator = ()=>{
    const HomeStack = createNativeStackNavigator()
return (
    <HomeStack.Navigator initialRouteName={CONTACT_LISTS}>
        <HomeStack.Screen name={CONTACT_LISTS} component={Contacts} options={{title:CONTACT_LISTS}}/>  
        {/* <HomeStack.Screen name="Contacts" component={Contacts}  options={{title:"Contacts", headerBackTitleVisible: false}} /> */}
        <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} options={{title: CONTACT_DETAILS}}/>  
        <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} options={{title:CREATE_CONTACT}}/>  
        <HomeStack.Screen name={ABOUT_US} component={AboutUs} options={{title:ABOUT_US}}/>  
        <HomeStack.Screen name={SETTINGS} component={Settings} options={{title:SETTINGS}}/>  


        {/* <HomeStack.Screen name="Home" component={require("../pages/home").default} options={{title:"首页"}}/>  */}
        {/* <HomeStack.Group screenOptions={{presentation: 'modal'}} ></HomeStack.Group> */}
    </HomeStack.Navigator>
)
}

export default HomeNavigator