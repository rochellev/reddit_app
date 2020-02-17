import { createStore, combineReducers, applyMiddleware} from 'redux'
import {accessToken} from './accessTokenReducer'
import {accessTokenSaga} from './accessTokenSaga'
import createSagaMiddleware from 'redux-saga'
import {AccessTokenActions} from './actions'
import {createMemoryHistory} from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import {frontPage} from '../frontPage/reducer'
import {frontPageSaga} from '../frontPage/saga'
import { all } from 'redux-saga/effects'


const sagaMiddleware = createSagaMiddleware();


export const history = createMemoryHistory({initialEntries: ["/"]});

const rootReducer = combineReducers({
  accessToken,
  router: connectRouter(history),
  frontPage
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, routerMiddleware(history)));

function* rootSaga() {
  yield all([
    accessTokenSaga(),
    frontPageSaga()
  ])
  // code after all-effect
}

sagaMiddleware.run(rootSaga);


store.dispatch({type: AccessTokenActions.start});

export type RootState = ReturnType<typeof rootReducer>;