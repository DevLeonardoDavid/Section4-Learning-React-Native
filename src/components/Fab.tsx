import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import React from 'react'

interface Props { //Properties of my FAB
  title: string,
  position?: 'br' | 'bl', //Propiedades arriba, métodos abajo (recomendación)
  onPress: () => void,
}

// export const Fab = ( props: Props ) => {
export const Fab = ( {title, onPress, position = 'br' }: Props ) => {

  const ios = () => {
    return(
      <TouchableOpacity
        activeOpacity={ 0.8 }
        style={ [
            styles.fabLocation,
            (position === 'bl') ? styles.left : styles.right,
          ] }
        onPress={ onPress }
      >      
          <View style={ styles.fab }>
            <Text style={ styles.fabText}>{title}</Text>
          </View>

      </TouchableOpacity>
    )
    
  }

  const android = () => {
    return(
      <View
        style={ [
          styles.fabLocation,
          (position === 'bl') ? styles.left : styles.right,
        ] }
      >
        <TouchableNativeFeedback
          onPress={ onPress }
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
        >
        <View style={ styles.fab }>
          <Text style={ styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>

      </View>
    )
  }

  return Platform.OS === 'ios' ? ios() : android();

}


const styles = StyleSheet.create({
  fabLocation: {//Bottom Right
    position: 'absolute', //Fijo en la posición inicial donde se creó
    bottom: 25, //Basado en el padre, ponlo al final
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: { //FloatingActionButton
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.3,

    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});