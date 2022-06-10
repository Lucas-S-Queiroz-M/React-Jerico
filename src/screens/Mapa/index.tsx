import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";


import MapView from 'react-native-maps';

export default function Mapa() {
//teste
const navigation = useNavigation<any>();
	return(
		<View style={{flex: 1, alignItems: 'center'}}>
			 <MapView
        style={styles.map}
				initialRegion={{
          latitude: -9.648139,
          longitude: -35.717239,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  map: {
      ...StyleSheet.absoluteFillObject,
      height: Dimensions.get("window").height,
  },
});
/*
export default function Mapa() {
  const navigation = useNavigation<any>();
  return (
    
    <View style={styles.container}>
      <View style={{borderRadius: 30,flex: 1, backgroundColor:'#E54B4B',  width: '100%', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#E54B4B',  width: '100%', height: '100%'}}>
      <Text style={{color:'#fff', fontSize: 40}}>Bem vindo, Carlos</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#E54B4B',  width: '100%', height: '100%'}}>
        <Text style={{color:'#fff'}}>Você gastou hoje</Text>
      
        <Text style={{color:'#fff', fontSize: 50}}>R$500,00</Text>
      </View>
      
      <View style={{borderRadius: 25,flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#E54B4B',  width: '100%', height: '100%'}}>
        <Text style={{color:'#fff'}}>ESCOLHER PERIODO</Text>
      
        <Text style={{color:'#fff'}}>Hoje               Essa Semana           Esse Mês</Text>        

      </View>
      </View>
      <View style={styles.listItem}>
              
          <Button icon={{name:'flight', color:'#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
                
          <Button icon={{name:'home', color: '#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
                
          <Button icon={{name:'local-dining', color: '#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
        
          <Button icon={{name:'directions-car', color: '#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
        
          <Button icon={{name:'build', color: '#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 10}}/>
           
      </View>
      
      <View style={styles.container}>
        <View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
        <View style={styles.sectionStyle}>
        <TextInput
            style={{flex: 1}}
            placeholder="Pizza (R$30,00)                     20/01/2020"           
        />
        </View>        
        
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
          
          <View style={styles.sectionStyle}>
        <TextInput 
          style={{flex: 1}} 
          placeholder="Coca-Cola (R$10,00)             20/01/2020"           
        /> 
        </View>
        </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F7EBE8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
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
  
});
*/