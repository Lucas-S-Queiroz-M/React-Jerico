import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Sobre from '../screens/Sobre';
import Login from '../screens/Login';
import Mapa from '../screens/Mapa';
import { Tarefa } from '../model/tarefa';


const Stack = createNativeStackNavigator();

function Routes() {
 return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Sobre" component={Sobre}/>
      <Stack.Screen name="Mapa" component={Mapa}/>
    </Stack.Navigator>
  );
}


export default Routes;