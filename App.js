
import React from 'react';
import { Router, Scene,Stack} from 'react-native-router-flux';
import Home from './src/Components/Home';
import NewsList from './src/Components/NewsList';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './src/Redux/Store/index';
const {persistor, store} = configureStore();

export default  App =()=>{
  
  return (
    <Provider store={store}>
    <PersistGate
    loading={null}
    persistor={persistor}
     >
    <Router>
    <Stack key="root">
    <Scene
    key="home"
    component={Home}
    title="Home"
    hideNavBar={true}
    />  
    <Scene
    key="newslist"
    component={NewsList}
    hideNavBar={true}
    />
    </Stack>
  </Router>
  </PersistGate>
  </Provider>
 
  );
}


