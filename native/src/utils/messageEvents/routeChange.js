import { dashUri } from '~/constants/webview'

const routeChange = ({
  location,
  setCurrentUrl,
  setCanGoBack,
  setUrlParams,
  setStatusBarColor,
}) => {
  const href = location && location.href

  if (href) {
    setCurrentUrl(href)
    setCanGoBack(!(href === dashUri))
  }
}

export default routeChange
