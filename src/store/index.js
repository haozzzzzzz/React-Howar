import { createStore ,applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
const sotre = createStore(reducer,applyMiddleware(thunk))
export default sotre