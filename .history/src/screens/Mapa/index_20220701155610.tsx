import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from 'react-native-maps';

export default function Mapa() {
//teste
  const navigation = useNavigation<any>();
  
	return(
		<View style={{flex: 1, alignItems: 'center'}}>
			 <MapView
        style={styles.map}
				initialRegion={{
          latitude: -9.7493256,
          longitude: -35.8833314,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
			>
        <Marker 
          coordinate = {{latitude: -9.7493256,longitude: -35.8833314}}
          pinColor = {"red"} // any color
          title={"Comunidade Católica Nova Jericó"}
          description={"Ser despojado para Adorar e Exaltar o Cristo Rei acolhendo e amando o irmão"}
        />
      </MapView>
		</View>
	);
}

const styles = StyleSheet.create({
  map: {
      ...StyleSheet.absoluteFillObject,
      height: Dimensions.get("window").height,
  },
});