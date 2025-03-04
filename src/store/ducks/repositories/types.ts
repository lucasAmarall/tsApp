// action types
export enum RepositoriesTypes{
  LOAD_REQUEST = '@/repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@/repositories/LOAD_SUCESS',
  LOAD_FAILURE = '@/repositories/LOAD_FAILURE',
}

// data types
export interface Repository{
  id: number,
  name: string
}

// state type
export interface RepositoriesState{
  readonly data: Repository[],
  readonly loading: boolean,
  readonly error: boolean
}