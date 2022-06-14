import React, {useContext} from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-elements';
import bg from '../../assets/imgs/background.png';





export default function Home() {
  const navigation = useNavigation<any>();

  return (
    
    
    <View style={style.container}>
      <Text></Text>
      
      <Text style={{color:'#800000', fontSize: 30}}>Comunidade Nova Jericó</Text>
      <Image 
        style={style.img} 
        source={require('../../assets/imgs/baner-jerico.png')}
      />
      <Image
          style={style.img}           
          source={require('../../assets/imgs/fachada-jerico.png')}
        />
      
        <Text style={{color:'#800000', fontSize: 20}}>Comunidade Católica</Text>
      
        <Text style={{color:'#800000', fontSize: 20}}>"Ser despojado para Adorar e Exaltar o Cristo Rei acolhendo e amando o irmão"</Text>

        <Text style={{color:'#800000'}}>Saiba mais</Text>
        

        <Button
        title="Sobre"
        icon={{name:'more', color: 'white'}} 
        buttonStyle={{backgroundColor:'#800000', marginHorizontal: 10, borderRadius: 30}}
        onPress={() => navigation.navigate("Sobre")}
        
        />      
        
      
      
    
      
    </View>
    
   
  );
}

const style = StyleSheet.create({
  container:{     
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    
    resizeMode: 'contain',
    //width: 100
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#32CD32',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem:{
    margin: 10,  
    flexDirection: 'row',
    backgroundColor:'white', 
    alignItems: 'center',
    justifyContent: 'center', 
    marginHorizontal: 10
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }, 
  sectionStyle: {
    flexDirection: 'row',    
    justifyContent: 'space-around',    
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#F7EBE8',    
    borderRadius: 10,   
    width: 300,
  },
  Background:{
    width: '100%',
    justifyContent: 'center',
    height: '100%'
  }
})