import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
  const navigation = useNavigation<any>();
 return (
   <View style={styles.container}>
     <Image 
        
        source={require('../../assets/imgs/baner-jerico.png')}
      />
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#fff',  width: '100%', height: '100%'}}>
     <Text></Text>
        
        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
        />
      
    <Text></Text>
      
      <Text style={{color:'#800000', fontSize: 20}}>INFORMAÇÕES ADICIONAIS</Text>
      <Text></Text>
      <Button icon={{name:'phone', color:'#fff'}} buttonStyle={{backgroundColor:'#800000', marginHorizontal: 10}}/>
        <Text style={{color:'#800000', fontSize: 20}}>(82) 98813-5428</Text>
        <Text></Text>
      <Button icon={{name:'email', color:'#fff'}} buttonStyle={{backgroundColor:'#800000', marginHorizontal: 10}}/>
      <Text style={{color:'#800000', fontSize: 20}}>andersonsilvanj82@gmail.com</Text>
      <Text style={{color:'#800000', fontSize: 20}}>compreicaro@hotmail.com</Text>
      <Text></Text>
      <Button icon={{name:'map', color:'#fff'}} onPress={() => navigation.navigate("Mapa")} buttonStyle={{backgroundColor:'#800000', marginHorizontal: 10}}/>
      <Text style={{color:'#800000', fontSize: 20}}>Localização</Text>
     
   </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  img: {    
    resizeMode: 'contain',
    //width: 250
  }
})