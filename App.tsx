import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavContainer from './src/navigations';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const App = () => {

  return (
    <AppNavContainer></AppNavContainer>
  );
};

export default App;
