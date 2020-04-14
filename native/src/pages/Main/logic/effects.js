import { useEffect } from 'react'
import isAndroid from '~/utils/isAndroid'

import NetInfo from '@react-native-community/netinfo'
import { BackHandler, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const effects = ({
  handleBackPress,
  hasInternet,
  setHasInternet,
  handleKeyboardShow,
}) => {
  const navigation = useNavigation()

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', handleKeyboardShow)
    return () => Keyboard.removeListener('keyboardWillShow', handleKeyboardShow)
  })

  useEffect(() => {
    if (isAndroid) {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress)

      return () => {
        BackHandler.removeEventListener('hardwareBackPress')
      }
    }
  })

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      setHasInternet(isConnected)
      if (!isConnected) {
        navigation.navigate('offline')
      } else {
        navigation.navigate('webview')
      }
    })

    return () => {
      unsubscribe()
    }
  })
}

export default effects
