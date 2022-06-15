import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackgroundBase, ImageBackground, ToastAndroid  } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import bg from '../../assets/imgs/logo-jerico.png';
import { Modalize } from 'react-native-modalize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export interface LoginScreenProps {
}

export default function LoginScreen(props: LoginScreenProps) {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const nav = useNavigation<any>();
  const modal = React.useRef<Modalize>();
  
  const cadastrar = async (usuario) => {
  console.log(usuario)
  
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
    .then(sucesso => { console.log('sucesso')})
    .catch(error => console.log(error))
  modal.current?.close();
}

  
 function handleLogin(){

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, senha)
    .then(sucesso => {  nav.navigate('Home')})
  
    .catch(error => ToastAndroid.show('O campo Email ou Senha, precisa ser preenchido!', ToastAndroid.LONG))
  
}

 return (
  <ImageBackground source={bg} style={styles.Background}>
    <Formik 
      initialValues={{email: '', senha: ''}}
      validationSchema={Yup.object({
        email: Yup.string().required('Informe o email').email('E-mail não válido'),
        senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa de 6 caracteres')
      })}
      onSubmit={handleLogin}
    >
        <View style={styles.margemTop}>
        <Text style={styles.logo}>Comunidade Nova Jerico</Text>
        <Text></Text>  

          <View style={styles.margem}>
          
          <Input
              placeholder="Digite seu email"
              style={styles.input}              
              value={email}
              onChangeText={(email) => setEmail(email)}
                            
              inputContainerStyle={styles.containerInput}
              inputStyle={{color:'#fff'}} leftIcon={{name:'person', color: '#fff'}}
          />
          
          <Input
              style={styles.input}
              value={senha}
              onChangeText={(senha) => setSenha(senha)}
              placeholder="Digite sua senha"
              inputContainerStyle={styles.containerInput}
              inputStyle={{color:'#fff'}} leftIcon={{name:'lock', color: '#fff'}}
              secureTextEntry={true}
              
          />

          </View>

          <View style={styles.listItem}>
          <Button 
            title="Acessar" icon={{name:'home', color: 'white'}} 
            buttonStyle={{backgroundColor:'#800000', marginHorizontal: 10, borderRadius: 30}} 
            onPress={handleLogin}>            
          </Button>
          <Text></Text>
          <Button 
            title="Cadastrar" icon={{name:'feedback', color: 'white'}} 
            buttonStyle={{backgroundColor:'#800000', marginHorizontal: 10, borderRadius: 30}} 
            onPress={() => modal.current?.open()}>            
          </Button>
          </View>         
        </View>
      </Formik>

      <Modalize ref={modal}>
                <Formik
                    initialValues={{email:'', senha:'', nome: ''}}
                    onSubmit={cadastrar}
                >
                  
                    {({handleChange, handleSubmit, isSubmitting}) => (
                        <View>
                            <Input onChangeText={handleChange('email')} placeholder='Digite seu email' keyboardType='email-address' />                            
                            <Input onChangeText={handleChange('senha')} placeholder='Digite sua senha' secureTextEntry />
                            <Button buttonStyle={{backgroundColor:'#800000', marginHorizontal: 10, borderRadius: 30}} type='clear' onPress={() => handleSubmit()} title="Cadastrar" disabled={isSubmitting} />
                        </View>
                        )}
                  
                </Formik>
        </Modalize>
    </ImageBackground>     
  );
}

const styles = StyleSheet.create({
  container:{
    flex:20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  margem :{
    margin: 10,    
    marginTop: 10,
    marginVertical: 270,
    //marginHorizontal: 10,
    //alignItems: 'center',
    justifyContent: 'center', 
  },

  margemTop :{
    //margin: 100,    
    //marginTop: 100,
    marginVertical: 350,
    //marginHorizontal: 10,
    //marginStart: 100,
    //alignItems: 'center',
    //justifyContent: 'center', 
  },

  title:{
    marginBottom: 14,
    fontSize: 20,  
  },

  input:{
    width: '90%',
    height: 45,    
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,   
  },

  centralizar:{
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  button:{
    width: '90%',
    height: 35,
    backgroundColor: '#800000',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    fontSize: 20,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  Background:{
    width: '100%',
    justifyContent: 'center',
    height: '100%'
  },

  erro: { 
    fontSize: 20, 
    textAlign: "center", 
    marginBottom: 20, 
    marginTop: -10, 
    color: 'red'},

  containerInput: {
    backgroundColor: '#800000',
    borderRadius: 30, 
    padding: 5,
    marginBottom: 5,
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

  logo: { color: '#800000', fontSize: 50, textAlign: 'center'},

  error:{color:'#fff', fontSize: 20, textAlign:'right'},

  errorLogin: {color: '#fff', textAlign: 'center'},

  listItem:{
    //margin: 12,  
    flexDirection: 'row',
    backgroundColor:'white', 
    //alignItems: 'center',
    //justifyContent: 'center', 
    //marginHorizontal: 10
  },
  
  cadastrar: {
    color: '#fff',
    fontSize: 20,
    textDecorationLine: 'underline',
    margin: 30,
    textAlign: 'center'
  } 
  
})