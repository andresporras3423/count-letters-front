import { combineReducers } from 'redux';
import configReducer from './config';

const rootReducer = combineReducers({ config: configReducer });

export default rootReducer;