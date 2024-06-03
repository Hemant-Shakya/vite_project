import {createStore} from 'redux';
import counterReducer from './reducer';

//create a store
const store= createStore(counterReducer);

export default store;