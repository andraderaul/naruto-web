import { useReducer, useCallback } from 'react'
import { AxiosError } from 'axios'
import ICharacter from '../interfaces/character'
import IJutsu from '../interfaces/jutsu'
import ITeam from '../interfaces/team'

type TData = ICharacter[] | IJutsu[] | ITeam[] | null
type TError = AxiosError | null

export enum RequestStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected'
}

type IAction = {
  type?: string
  payload?: TData
  error?: TError
}

type IState = {
  status?: string
  data?: TData
  error?: TError
}

type IUseAsync = {
  status?: string
  data?: TData
  error?: TError
  runPromise: (promise: Promise<TData>) => void
}

export const asyncReduce = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case RequestStatus.PENDING:
      return {
        status: RequestStatus.PENDING,
        data: null,
        error: null
      }

    case RequestStatus.RESOLVED:
      return {
        status: RequestStatus.RESOLVED,
        data: action.payload,
        error: null
      }
    case RequestStatus.REJECTED:
      return {
        status: RequestStatus.REJECTED,
        data: null,
        error: action.error
      }
    default:
      throw Error(`Unhandled action: ${action.type}`)
  }
}

const useAsync = (initialState: IState): IUseAsync => {
  const [state, dispatch] = useReducer(asyncReduce, {
    status: RequestStatus.IDLE,
    data: null,
    error: null,
    ...initialState
  })

  const runPromise = useCallback((promise) => {
    dispatch({ type: RequestStatus.PENDING })
    promise.then(
      (data: TData) =>
        dispatch({ type: RequestStatus.RESOLVED, payload: data }),
      (error: TError) => dispatch({ type: RequestStatus.REJECTED, error })
    )
  }, [])

  return { ...state, runPromise }
}

export default useAsync
