import { useReducer, useCallback } from "react";
import { AxiosError } from "axios";
import ICharacter from "../interfaces/character";

type TData = ICharacter[] | null;
type TError = AxiosError | null;

export enum RequestStatus {
  IDLE = "idle",
  PENDING = "pending",
  RESOLVED = "resolved",
  REJECTED = "rejected",
}

interface IAction {
  type?: string;
  payload?: TData;
  error?: TError;
}

interface IState {
  status?: string;
  data?: TData;
  error?: TError;
}

export const asyncReduce = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case RequestStatus.PENDING:
      return {
        status: RequestStatus.PENDING,
        data: null,
        error: null,
      };

    case RequestStatus.RESOLVED:
      return {
        status: RequestStatus.RESOLVED,
        data: action.payload,
        error: null,
      };
    case RequestStatus.REJECTED:
      return {
        status: RequestStatus.REJECTED,
        data: null,
        error: action.error,
      };
    default:
      throw Error(`Unhandled action: ${action.type}`);
  }
};

const useAsync = (initialState: IState) => {
  const [state, dispatch] = useReducer(asyncReduce, {
    status: RequestStatus.IDLE,
    data: null,
    error: null,
    ...initialState,
  });

  const runPromise = useCallback((promise) => {
    dispatch({ type: RequestStatus.PENDING });
    promise.then(
      (data: TData) =>
        dispatch({ type: RequestStatus.RESOLVED, payload: data }),
      (error: TError) => dispatch({ type: RequestStatus.REJECTED, error })
    );
  }, []);

  return { ...state, runPromise };
};

export default useAsync;
