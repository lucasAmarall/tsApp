import { createStore, Store, applyMiddleware } from 'redux';
import { RepositoriesState } from './ducks/repositories/types';
import RootReducer from './ducks/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export interface ApplicationState {
  repositories: RepositoriesState
};
const store: Store<ApplicationState> = createStore(RootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store;