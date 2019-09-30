import { call, put } from 'redux-saga/effects';
import api from '../../../services/Api';
import { loadSucess,  loadFailure} from './actions';
export function* load() {
  try {
    const response = yield call(api.get, '/users/lucasAmarall/repos');
    yield put(loadSucess(response.data))
  } catch (erro) {
    yield put(loadFailure());
  }
}