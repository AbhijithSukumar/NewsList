import ListReducer from './ListReducer';


const rehydrated = (state = false, action) => {
    switch (action.type) {
      case 'persist/REHYDRATE':
        return true;
      default:
        return state;
    }
  };
// Redux: Root Reducer
const rootReducer = {
  rehydrated,
  ListReducer,
 
};

// Exports
export default rootReducer;