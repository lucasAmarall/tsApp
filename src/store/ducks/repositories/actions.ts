import { RespositoriesTypes, Repository } from './types';
import { action } from 'typesafe-actions';

export const loadRequest = () => action(RespositoriesTypes.LOAD_REQUEST);
export const loadSucess = (data: Repository[]) => action(RespositoriesTypes.LOAD_SUCCESS,data);
export const loadFail = () => action(RespositoriesTypes.LOAD_FAIL);