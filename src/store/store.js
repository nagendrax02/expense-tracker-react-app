import {createStore} from 'redux'

import { rootReducer } from './reducer/rootReducer'


const store = createStore(rootReducer)


console.log('store--->', store.getState())

export default store