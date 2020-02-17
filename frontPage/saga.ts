import {takeLeading, call, put, select} from "redux-saga/effects";
import {FrontPageActions} from "./actions";
import { username, password, basicAuthHeader } from "../.credentials";
import {getToken} from "../data/accessTokenSelector";
import { isContent } from "../data/LCE";


function* getTrending(action) {
  try {
    const tokenLce = yield select(getToken);

    if (isContent(tokenLce)) {
      const token = tokenLce.data;

      const response =  yield call(fetch, "https://oauth.reddit.com/best?raw_json=1", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const posts = yield call([response, "json"]);

      yield put({type: FrontPageActions.success, posts});

    } else {
      console.warn("token is not content");
    }
  } catch (error) {
    yield put({type: FrontPageActions.error, error});
  }
}

export function* frontPageSaga() {
  yield takeLeading(FrontPageActions.start, getTrending);
}