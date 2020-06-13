import keys from 'ramda/src/keys'
import pipe from 'ramda/src/pipe'
import defaultTo from 'ramda/src/defaultTo'

export const hostname = 'localhost'
export const rootUrl = 'http://localhost:3000/'

const about = `${rootUrl}about`

export const urlToStatusBarColor = {
  [rootUrl]: {
    backgroundColor: '#ff0000',
    barStyle: 'dark-content',
  },
  [about]: {
    backgroundColor: '#CCCCCC',
    barStyle: 'dark-content',
  },
  default: {
    backgroundColor: '#ffffff',
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
