import composeEnhancer from '~/utils/composeEnhancer'

import state from './state'
import handlers from './handlers'
import effects from './effects'
import propsMapper from './propsMapper'

export default composeEnhancer(state, handlers, effects, propsMapper)
