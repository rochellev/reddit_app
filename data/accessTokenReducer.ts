import { notRequested, content, error, loading } from "./LCE";
import { AccessTokenActions } from "./actions";

const initialState = {
  token: notRequested(),
  expireTime: 0,
}

export const accessToken = (state = initialState, action) => {
  if (action.type === AccessTokenActions.success) {
    return {
      ...state,
      token: content(action.token),
      expireTime: Date.now() + action.expiresIn,
    }
  }

  if (action.type === AccessTokenActions.error) {
    return {
      ...state,
      token: error(action.error),
      expireTime: 0
    }
  }

  if (action.type === AccessTokenActions.start) {
    return {
      ...state,
      token: loading(),
      expireTime: 0
    }
  }

  return state;
};

