import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
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
        coordinate = {{latitude: 37.78825,longitude: -122.4324}}
         pinColor = {"purple"} // any color
         title={"title"}
         description={"description"}/>
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