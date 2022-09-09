import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';

import Splash from './screens/Splash';
import MainNavigator from './routes/MainNavigator'

export default function App() {

  const [exibeSplash, setexibeSplash] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setexibeSplash(false), 3000);
    }, []);

  return <>{exibeSplash ? <Splash/> : <MainNavigator/>}</>;
}