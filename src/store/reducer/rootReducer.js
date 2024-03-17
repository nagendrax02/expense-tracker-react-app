import {combineReducers} from 'redux'
import { expensesReducer } from './expenses-reducer/expensesReducer'

export const rootReducer =  combineReducers({expensesReducer})