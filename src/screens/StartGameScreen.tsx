import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

const StartGameScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextStyle}>Guess My Number</Text>
      <View style={styles.CardContainer}>
        <Text style={styles.TextStyle}> Enter a Number</Text>
        <TextInput
          keyboardType="number-pad"
          maxLength={2}
          style={styles.TextInputStyle}
          onChangeText={() => console.log('hi from Text input')}
        />
        <View style={styles.ButtonContainer}>
          <CustomButton title={'add'} />
          <CustomButton title={'remove'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#72063c',
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
    width: '70%',
    justifyContent: 'space-between',
  },
  TextStyle: {
    marginBottom: 10,
    fontSize: 30,
    color: '#FFA500',
    alignContent: 'center',
  },
  TextInputStyle: {
    fontSize: 25,
    height: 50,
    color: '#FFA500',
    fontFamily: 'bold',
    alignContent: 'center',
    borderColor: '#FFA500',
    borderRadius: 1,
    margin: 8,
    borderBottomWidth: 1,
  },
});
export default StartGameScreen;
