import { createStore, Store } from 'redux';
import { RepositoriesState } from './ducks/repositories/types';
import RootReducer from './ducks/rootReducer';

export interface ApplicationState {
  repositories: RepositoriesState
}
const store: Store<ApplicationState> = createStore(RootReducer);
export default store