import * as React from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';
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
    <><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{height: 100, width: 150}} source={require('./assets/img/gelo.gif')} />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={email}
        placeholder="email" />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={password}
        placeholder="password" />
      <Text>    </Text>
      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')} />
      <Text>    </Text>
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('Sign in')} />
    </View>
      <View style={styles.rodape}>
        <Text>Contato</Text>
      </View></>
  );
}

function Home({ navigation }) {
  return (
    <><View style={styles.principal}>
      <View style={styles.secundario}>
        <Button
          title="Pix"
          onPress={() => navigation.navigate('Comprar')} />
      </View>
      <View style={styles.secundario}>
        <Button
          title="Cartão"
          onPress={() => navigation.navigate('Comprar')} />
      </View>
      <View style={styles.secundario}>
        <Button
          title="Paypal"
          onPress={() => navigation.navigate('Comprar')} />
      </View>
      <View style={styles.secundario}>
        <Button
          title="Dinheiro"
          onPress={() => navigation.navigate('Comprar')} />
      </View>
    </View><View style={styles.rodape}>
        <Text>Contato</Text>
      </View></>
  );
}

function Signin({ navigation }) {
  const [fname, lname, email, password, onChangeText] = React.useState('');
  return (
    <><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{height: 100, width: 150}} source={require('./assets/img/gelo.gif')} />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={fname}
        placeholder="Nome" />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={lname}
        placeholder="Sobrenome" />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={email}
        placeholder="E-mail" />
      <Text>    </Text>
      <TextInput
        onChangeText={onChangeText}
        value={password}
        placeholder="Senha" />
      <Text>    </Text>
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('Login')} />
    </View><View style={styles.rodape}>
        <Text>Contato</Text>
      </View></>
  );
}

function Comprar({ navigation }) {
  const [forma, pagar, onChangeText] = React.useState('');
  return (
    <View style={styles.contcomprar}>
      <View style={styles.comprar}>
        <Image source={require('./assets/img/g1.png')} />
      </View>
      <View style={styles.comprar}>
        <Text>    </Text>
        <TextInput
          onChangeText={onChangeText}
          value={pagar}
          placeholder="Quantidade"
        />
        <Text>    </Text>
        <Button
          title="Comprar"
          onPress={() => navigation.navigate('Finalizar')}
        />
        <Text>    </Text>
        <Button
          title="Forma de pagamento"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

function Finalizar({ navigation }) {
  return (
    <><View style={styles.finalizar}>
      <Image source={require('./assets/img/g1.png')} />
      <View style={styles.secundario}>
        <Text>    </Text>
        <Text>Obrigado pela Compra! Volte Sempre!</Text>
        <Text>    </Text>
        <Button
          title="Sair"
          onPress={() => navigation.navigate('Login')} />
      </View>
    </View><View style={styles.rodape}>
        <Text>Contato</Text>
      </View></>
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
          headerStyle: { backgroundColor: 'lightblue' },
        }}
      />
      <Stack.Screen
        name="Sign in"
        component={Signin}
        options={{
          title: 'Cadastro',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'lightblue' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'lightblue' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Comprar"
        component={Comprar}
        options={{
          title: 'Comprar',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'lightblue' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Finalizar"
        component={Finalizar}
        options={{
          title: 'Finalizar',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'lightblue' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
    </Stack.Navigator>
  );
}

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
    width: '40%',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },

  contcomprar: {
    //flex: 1,
    marginTop: '10%',
    justifyContent: 'top',
    alignItems: 'center',
    marginRight: 30,
    height: 250,
    width: '75%',
  },

  comprar: {
    width: '100%',
    marginLeft: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  finalizar: {
    flex: 1,
    marginTop: '20%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
  },

  rodape: {
    justifyContent: 'center',
    alignItems: 'center',
    border: 1,
    height: 30,
    backgroundColor: 'lightblue',
  }

});
