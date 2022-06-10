import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Routes from './src/navegation/Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhQdQb5MBIE-6Oe9nCC_QuvuvTnh1VKVg",
  authDomain: "jerico-17860.firebaseapp.com",
  projectId: "jerico-17860",
  storageBucket: "jerico-17860.appspot.com",
  messagingSenderId: "803251744467",
  appId: "1:803251744467:web:106615c19f35d961342e26",
  measurementId: "G-HC61M6046H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
