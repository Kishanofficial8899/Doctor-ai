import { store } from 'Store';

const selectState = (state) => {
  return state.root;
}

export const selectAuthData = (state) => {
  return selectState(state).auth;
}