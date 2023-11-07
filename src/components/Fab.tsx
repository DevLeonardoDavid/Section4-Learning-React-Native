import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface Props { //Properties of my FAB
  title: string,
  position?: 'br' | 'bl', //Propiedades arriba, métodos abajo (recomendación)
  onPress: () => void,
}

// export const Fab = ( props: Props ) => {
export const Fab = ( {title, onPress, position = 'br' }: Props ) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ [
        styles.fabLocation,
        (position === 'bl') ? styles.left : styles.right,
      ] }
    >
      <View style={ styles.fab }>
        <Text style={ styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
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