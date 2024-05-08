import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../components/CustomButton';

const HomeScreen = ({userNumber}) => {
  var min = 1;
  var max = 100;
  const [randeomNum, setRundomNum] = useState(
    generateRandromNumber(userNumber),
  );
  function generateRandromNumber(excludedNum: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function validateRandromNumber(guess: string, excludedNum: number) {
    if (guess === 'lower') {
      max = randeomNum;
    } else {
      min = randeomNum;
    }
    setRundomNum(generateRandromNumber(excludedNum));
  }

  useEffect(() => {
    if (userNumber === randeomNum) {
      Alert.alert('your Number Is' + randeomNum + ' I am sure i Won !!!!');
    }
  }, [userNumber, randeomNum]);

  return (
    <View>
      <Text style={styles.headerText}>The Guess Number Is </Text>
      <Text style={styles.guessNumber}> {randeomNum} </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonBackground}>
          <CustomButton
            title="Lower"
            onPress={() => validateRandromNumber('lower', randeomNum)}
          />
        </View>
        <View style={styles.buttonBackground}>
          <CustomButton
            title="Higher"
            onPress={() => validateRandromNumber('higher', randeomNum)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#000000',
    padding: 10,
  },
  guessNumber: {
    borderRadius: 2,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 30,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    padding: 10,
  },
  buttonBackground: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#000000',
  },
});
export default HomeScreen;
