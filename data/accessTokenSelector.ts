import {RootState} from "./bootstrap";

export const getToken = (state: RootState) => {
  return state.accessToken;
}