import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartGameScreen from './src/screens/StartGameScreen';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ImageBackground
      source={require('./src/assets/images/background.png')}
      style={styles.backgroundImage}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartGameScreen" component={StartGameScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
      </ImageBackground>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity : 0.7,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
});
export default App;
