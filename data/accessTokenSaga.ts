import {takeLeading, call, put} from "redux-saga/effects";
import {AccessTokenActions} from "./actions";
import { username, password, basicAuthHeader } from "../.credentials";
import {FrontPageActions } from "../frontPage/actions";


function* getToken(action) {
  try {
    var form = new FormData();
    form.append("grant_type", "password");
    form.append("username", username);
    form.append("password", password);

    const response = yield call(fetch, "https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: basicAuthHeader,
        'User-Agent': "funredditapp"
      },
      body: form
    });
    const responseObject = yield call([response, "json"]);

    if (responseObject.error) {
      yield put({type: AccessTokenActions.error, error: responseObject.error});
    } else {
      yield put({type: AccessTokenActions.success, token: responseObject.access_token, expiresIn: responseObject.expires_in});
    }

    yield put({type: FrontPageActions.start});
  } catch (error) {
    yield put({type: AccessTokenActions.error, error});
  }
}

export function* accessTokenSaga() {
  yield takeLeading(AccessTokenActions.start, getToken);
}