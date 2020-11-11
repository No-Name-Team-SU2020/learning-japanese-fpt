import { createStore, applyMiddleware, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';


const sagaMiddlware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddlware]

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
