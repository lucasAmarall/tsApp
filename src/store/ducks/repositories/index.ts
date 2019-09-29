
import { RepositoriesState, RepositoriesTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: RepositoriesState = {
  data: [{
    id: 1,
    name: "teste"
  }],
  error: false,
  loading: false
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { 
        ...state,
        loading: true 
      };
    
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    
    case RepositoriesTypes.LOAD_FAIL:
      return {
        ...state,
        error: true,
        data: []
      };
    
    default:
      return state;
  };
};
export default reducer;