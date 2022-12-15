import React, {useState, useEffect} from 'react';
import auth, { firebase } from '@react-firebase/auth';
import { TextInput, Button, Text, View, Image } from 'react-native-web';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Usuário criado e logado!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('O e-mail já está em uso!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('O e-mail digitado é inválido!');
        }

        if (password.length < 6){
          console.log('Não pode ter menos que 6 caracteres!');
        }

        console.error(error);
      });
  }

  function signInWithEmailAndPassword() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Usuário autenticado!');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <View>

      <TextInput 
        placeholder="E-mail" 
        value={email} 
        onChangeText={setEmail} 
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar no App" onPress={signInWithEmailAndPassword} />
      <Button title="Cadastrar e Entrar" onPress={signUp} />

    </View>
  );
}