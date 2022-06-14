import React, {useContext} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-elements';
import bg from '../../assets/imgs/background.png';





export default function Home() {
  const navigation = useNavigation<any>();

  return (
    

    <View style={style.container}>
      
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#009900',  width: '100%', height: '100%'}}>
      <Text style={{color:'#fff', fontSize: 30}}>Comunidade Nova Jericó</Text>
      
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#009900',  width: '100%', height: '100%'}}>
        <Text style={{color:'#fff', fontSize: 20}}>Comunidade Católica</Text>
      
        <Text style={{color:'#fff', fontSize: 20}}>"Ser despojado para Adorar e Exaltar o Cristo Rei acolhendo e amando o irmão"</Text>
      
      

        </View>
      
        <Text style={{color:'#fff'}}>Saiba mais</Text>
        

        <Button
        title="Sobre"
        
        onPress={() => navigation.navigate("Sobre")}
        
      />      
        
      
      
      </View>
      
    </View>
    
   
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#32CD32',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  },
  listItem:{
    margin: 12,  flexDirection: 'row',backgroundColor:'#F7EBE8', alignItems: 'center', marginHorizontal: 1
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