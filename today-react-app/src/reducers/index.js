import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './appReducer';
import {updateReducer} from './updateReducer';

export default combineReducers({
  appState:appReducer,
  updateState:updateReducer,
  routing
})