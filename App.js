import * as React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import style from './styles/style.js'

import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';


function Login({ navigation }) {
  const [email, password, onChangeText] = React.useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LOGIN</Text>
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={email}
        placeholder="email"
      />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={password}
        placeholder="password"
      />
      <Text>    </Text>
      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>    </Text>
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('Sign in')}
      />
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.principal}>
      <View style={styles.secundario}>
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('Sign in')}
        />
      </View>
      <View style={styles.secundario}>
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('Sign in')}
        />
      </View>
      <View style={styles.secundario}>
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('Sign in')}
        />
      </View>
      <View style={styles.secundario}>
        <Button
          title="Sign in"
          onPress={() => navigation.navigate('Sign in')}
        />
      </View>
    </View>
  );
}

function Signin({ navigation }) {
  const [fname, lname, email, password, onChangeText] = React.useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CADASTRE-SE</Text>
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={fname}
        placeholder="Nome"
      />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={lname}
        placeholder="Sobrenome"
      />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={email}
        placeholder="E-mail"
      />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={password}
        placeholder="Senha"
      />
      <Text>    </Text>
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen
        name="Sign in"
        component={Signin}
        options={{
          title: 'Sign in',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
    </Stack.Navigator>
  );
}
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Itajuba234</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    marginTop: '60%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
  },

  secundario: {
    borderColor: 'black',
    borderWidth: 1,
    width: '40%',
  }

});
