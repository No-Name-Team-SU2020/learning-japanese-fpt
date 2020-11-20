import { createStore, applyMiddleware, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddlware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddlware]

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddlware.run(rootSaga);

export default store;
