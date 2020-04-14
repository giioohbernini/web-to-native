import React from 'react'
import { View, Text } from 'react-native'

import style from './style'
const { container, title } = style

const Offline = () => {
  return (
    <View style={container}>
      <Text style={title}>Você está sem conexão com a internet.</Text>
    </View>
  )
}

export default Offline
