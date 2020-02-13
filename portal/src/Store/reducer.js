import { authAction } from "./actions";
import ReducerFactory from "./reducerFactory";

const initialState = {
  auth: {
    initialized: false,
    loading: false,
    error: null,
    data: null
  }
};

const reducer = new ReducerFactory(initialState)
  .add(authAction.init, (state, action) => {
    return {
      ...state,
      auth: {
        initialized: true,
        loading: true,
        error: null,
        data: null
      }
    };
  })
  .add(authAction.reset, (state, action) => {
    return {
      ...state,
      auth: {
        initialized: false,
        loading: true,
        error: null,
        data: "kishan"
      }
    };
  })
  .add(authAction.success, (state, action) => {
    return {
      ...state,
      auth: {
        initialized: true,
        loading: false,
        error: null,
        data: action.payload
      }
    };
  })
  .add(authAction.failed, (state, action) => {
    return {
      ...state,
      auth: {
        initialized: true,
        loading: false,
        error: action.payload,
        data: null
      }
    };
  })
  .toReducer();

export default reducer;
