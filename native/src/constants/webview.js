import keys from 'ramda/src/keys'
import pipe from 'ramda/src/pipe'
import defaultTo from 'ramda/src/defaultTo'

//export const rootUrl = 'http://localhost:3000/'
export const rootUrl = 'https://www.google.com/?teste=true'

export const urlToStatusBarColor = {
  default: {
    backgroundColor: '#ff000',
    barStyle: 'dark-content',
  },
}

export const getUrlToStatusBarColor = target => {
  const find = array => array.find(item => item === target)

  const getByKey = key => urlToStatusBarColor[key]

  const statusBarColor = pipe(
    keys,
    find,
    getByKey,
    defaultTo(urlToStatusBarColor.default),
  )(urlToStatusBarColor)

  return statusBarColor
}
