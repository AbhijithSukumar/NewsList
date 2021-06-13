// import member from './member';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
//import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import reducers from '../Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: [
      
      ]
};
const reducer = persistCombineReducers(config, reducers);

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middleware)),
  );

  const persistor = persistStore(store, null, () => {
    store.getState();
  });

  return {persistor, store};
};

export default configureStore;
