import Reactotron from 'reactotron-react-native'

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'Example App' })
    .useReactNative()
    .connect()

  tron.clear()

  console.tron = tron
}
