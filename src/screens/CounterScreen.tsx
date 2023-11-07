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
        style={ styles.fabLocationBR }
      >
        <View style={ styles.fab }>
          <Text style={ styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => setCounter( counter - 1)}
        style={ styles.fabLocationBL }
      >
        <View style={ styles.fab }>
          <Text style={ styles.fabText}>-1</Text>
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
    // position: 'relative', //default setting for all RN components
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
  fabLocationBR: {//Bottom Right
    position: 'absolute', //Fijo en la posición inicial donde se creó
    bottom: 25, //Basado en el padre, ponlo al final
    right: 25,
  },
  fabLocationBL: {//Bottom Right
    position: 'absolute', 
    bottom: 25,
    left: 25,
  },
  fab: { //FloatingActionButton
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});