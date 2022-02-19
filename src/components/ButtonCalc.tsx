import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    text: string,
    color?: string
}

export const ButtonCalc = ({text, color = '#2D2D2D'}: Props) => {
  return (
    <View style={{
            ...styles.button,
            backgroundColor: color
        }}>
        <Text style={styles.buttonText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400'
    }
});
  