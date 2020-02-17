import { createStore, combineReducers, applyMiddleware} from 'redux'
import {accessToken} from './accessTokenReducer'
import {accessTokenSaga} from './accessTokenSaga'
import createSagaMiddleware from 'redux-saga'
import {AccessTokenActions} from './actions'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  accessToken
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(accessTokenSaga);


store.dispatch({type: AccessTokenActions.start});

export type RootState = ReturnType<typeof rootReducer>;