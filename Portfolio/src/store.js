import { createStore } from 'redux'
import allReducers from './reducers/index'
import {
  addTodo,
  toggleTodo,
  
} from './actions/projects'

const store = createStore(allReducers)


export default store;