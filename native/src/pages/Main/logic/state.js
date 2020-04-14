import { useState } from 'react'

import { rootUrl } from '~/constants/webview'

const state = () => {
  const [URI, setURI] = useState(rootUrl)
  const [webview, setWebview] = useState(false)
  const [canGoBack, setCanGoBack] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')
  const [customBack, setCustomBack] = useState(false)
  const [hasInternet, setHasInternet] = useState(false)

  return {
    webview,
    setWebview,
    URI,
    setURI,
    canGoBack,
    setCanGoBack,
    currentUrl,
    setCurrentUrl,
    customBack,
    setCustomBack,
    hasInternet,
    setHasInternet,
  }
}

export default state
