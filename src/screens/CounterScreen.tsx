import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10);

  return (
    <View style ={{
      flex: 1, //Indicates to take all the available space of the parent content
      justifyContent: 'center'
    }}>

      <Text style={{
        textAlign: 'center',
        fontSize: 40,
        // position: 'relative', //default setting for all RN components
        top: -15,
      }}>
        Counter: { counter }
      </Text>

      <TouchableOpacity
        onPress={ () => setCounter( counter + 1)}
      >
        <View style= {{
          backgroundColor: 'red',
          borderRadius: 100,
          height: 40,
        }}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}