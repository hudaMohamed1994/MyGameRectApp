import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    overflow: 'hidden', // Ensures that content is clipped to the rounded border
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButton;
