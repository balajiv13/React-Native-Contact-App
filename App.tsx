import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const App = () => {

  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

export default App;
