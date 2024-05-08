import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const StartGameScreen = () => {
  const navigation = useNavigation();
  const [inputNumber, setInputNumber] = useState('');

  function checkInputText() {
    var formattedInput = parseInt(inputNumber);
    if (formattedInput <= 0) {
      Alert.alert('please Enter A vaild number');
    } else {
      resetInputText()
      navigation.navigate('HomeScreen',{ userNumber: formattedInput});
    }
  }

  function resetInputText() {
    setInputNumber('');
  }

  return (
      <View style={styles.Container}>
        <Text style={styles.TextStyle}>Guess My Number</Text>
        <View style={styles.CardContainer}>
          <Text style={styles.TextStyle}> Enter a Number</Text>
          <TextInput
            keyboardType="number-pad"
            maxLength={2}
            style={styles.TextInputStyle}
            value={inputNumber}
            onChangeText={(value: string) => setInputNumber(value)}
          />
          <View style={styles.ButtonContainer}>
            <View style={styles.ButtonView}>
              <CustomButton onPress={checkInputText} title={'confirm'} />
            </View>
            <View style={styles.ButtonView}>
              <CustomButton onPress={resetInputText} title={'reset'} />
            </View>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#9c0d7f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20, // this add shadow for andorid
    maxHeight: 400,
    shadowOffset: {width: 10, height: 10}, // this add shadow for IOS
  },
  ButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextStyle: {
    marginBottom: 10,
    fontSize: 30,
    color: '#072527',
    alignContent: 'center',
  },
  TextInputStyle: {
    fontSize: 25,
    height: 50,
    color: '#051210',
    fontFamily: 'bold',
    alignContent: 'center',
    borderColor: '#7300ff',
    borderRadius: 1,
    margin: 8,
    borderBottomWidth: 1,
  },
  ButtonView: {
    margin: 5,
    backgroundColor: '#7300ff',
    borderRadius: 20,
    flex: 1,
  },
});
export default StartGameScreen;
