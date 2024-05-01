import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({ title }) => {
    return (
      <Pressable style={styles.button} >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3498db',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 20, // Adjust the value to change the corner radius
      overflow: 'hidden', // Ensures that content is clipped to the rounded border
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });


export default CustomButton
