import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/components';

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10);

  return (
    <View style ={styles.container}>

      <Text style={ styles.title}>
        Counter: { counter }
      </Text>

      <Fab 
        title='+1'
        onPress={ () => setCounter( counter + 1) }
      />

      <Fab 
        title='-1'
        position='bl'
        onPress={ () => setCounter( counter - 1) }
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1, //Indicates to take all the available space of the parent content
    justifyContent: 'center'
  },
  title: {
    // position: 'relative', //default setting for all RN components
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
  
});