export interface DispatchAction {
  type: string;
  payload?: any;
  error?: Error;
}

export interface ReduxResponse {
  success: boolean;
  message: string;
  result?: any;
  error?: any;
}