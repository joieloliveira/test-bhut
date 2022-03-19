import React from 'react';
import Routes from './src/routes';

import { ScrollView } from "react-native";

import {Home} from './src/pages/Home';

const App = () => {
  return (
    <ScrollView>
      <Home>
          <Routes />
      </Home>
    </ScrollView>
  )
}

export default App;