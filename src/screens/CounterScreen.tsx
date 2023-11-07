import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10);

  return (
    <View style ={styles.container}>

      <Text style={ styles.title}>
        Counter: { counter }
      </Text>

      <TouchableOpacity
        onPress={ () => setCounter( counter + 1)}
      >
        <View style= { styles.increaseButton}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //Indicates to take all the available space of the parent content
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    // position: 'relative', //default setting for all RN components
    top: -15,
  },
  increaseButton: {
    backgroundColor: 'red',
    borderRadius: 100,
    height: 40,
  }
});