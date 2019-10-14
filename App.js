import React, {useState,useEffect} from 'react';
import MainNavigator from './screens/mainNavigator';
import * as Font from 'expo-font'
import {Provider} from 'react-redux';
import {store} from './store'

export default function App() {
  const [appReady, setAppReady]  = useState(false)
  
  loadFonts = async (ready)=>{
    if(ready) return
    try{
      await  Font.loadAsync({
         'Rounded Mplus 1c': require('./assets/fonts/MPLUSRounded1c-Regular.ttf'),
       });
      setAppReady(true)
     }
     catch(e){
       console.log(e)
     }
  }

  useEffect(()=>{
    this.loadFonts(appReady)
  })
  
  return (
    appReady ? <Provider store={store}> 
    <MainNavigator /> 
    </Provider> 
    : null
  );
}

