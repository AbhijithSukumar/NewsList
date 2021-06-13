import listSTore from '../Store/ListStore';

export const initialState = listSTore;

export default function ListReducer(state = initialState, action) {
  switch (action.type) {
    case 'NEWS_LIST': {
      if (action.data) {
        return {
          loading: false,
          error: null,
          data: action.data,
        };
      }
      return initialState;
    } 
   
    case 'NEWS_LIST_ERROR': {
      return {
        loading: false,
        error: action.data,
        data: null,
      };
      
    }
    default:
      return state;
  }
}
