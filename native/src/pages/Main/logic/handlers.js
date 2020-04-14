//import propOr from 'ramda/src/propOr'

import messageEvents from '~/utils/messageEvents'
import { panelUri, dashUri } from '~/constants/webview'
import { StatusBar } from 'react-native'

const handlers = props => {
  const {
    setWebview,
    webview,
    setCanGoBack,
    customBack,
    currentUrl,
    setCurrentUrl,
  } = props

  return {
    handleKeyboardShow: () => {
      StatusBar.setBarStyle('dark-content')
    },
    handleSpinner: status => () => {},
    handleOnMessage: event => {
      const value = event.nativeEvent.data
      const parsedValue = JSON.parse(value)

      messageEvents({ ...parsedValue, ...props })
    },
    handleRef: webviewValue => {
      setWebview(webviewValue)
    },
    handleNavigationChange: ({ canGoBack, url }) => {
      setCanGoBack(canGoBack)
      setCurrentUrl(url)
    },
    handleBackPress: () => {
      if (customBack) {
        webview.postMessage(customBack)
        return true
      } else if (webview && currentUrl !== dashUri && currentUrl !== panelUri) {
        webview.goBack()
        return true
      }

      return false
    },
  }
}

export default handlers
