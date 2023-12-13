import { DispatchAction } from "@/utils/interface";
import * as Actions from "@/redux/constants";

const initialState = {
  isLoading: false,
  isAuthorize: false,
  isVerifying: false,
  isConfirmEmail: false,
  user: null,
  error: null,
};

const userReducer = (state = initialState, action: DispatchAction) => {
  switch (action.type) {
    // Register reducer
    case Actions.USER_REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case Actions.USER_REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case Actions.USER_REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }

    // Login reducer
    case Actions.USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case Actions.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case Actions.USER_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    }

    // Login with token reducer
    case Actions.LOGIN_WITH_TOKEN_REQUEST: {
      return {
        ...state,
        isAuthorize: true
      };
    }
    case Actions.LOGIN_WITH_TOKEN_SUCCESS: {
      return {
        ...state,
        isAuthorize: false,
        user: action.payload
      };
    }
    case Actions.LOGIN_WITH_TOKEN_FAILURE: {
      return {
        ...state,
        isAuthorize: false,
        error: action.error
      };
    }

    case Actions.USER_LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
