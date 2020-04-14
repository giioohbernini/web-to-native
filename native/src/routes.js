import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from '~/pages/Main'
import Offline from '~/pages/Offline'

const stack = createStackNavigator()

const { Navigator, Screen } = stack

const commonOptions = {
  header: () => null,
}

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="webview">
      <Screen name="webview" component={Main} options={commonOptions} />
      <Screen name="offline" component={Offline} options={commonOptions} />
    </Navigator>
  </NavigationContainer>
)

export default Routes
