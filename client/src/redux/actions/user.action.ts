import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";

import * as Actions from "@/redux/constants";

// Register action
export const registerUser: any = (data: any) => async (dispatch: Dispatch) => {
  dispatch({ type: Actions.USER_REGISTER_REQUEST });

  return axios.post(`${process.env.REACT_APP_SERVER_API}/user/register`, data)
    .then(response => {
      if (response.data.success) {
        localStorage.setItem("access-token", response.data.token);
        dispatch(loginWithToken(false));
      }

      dispatch({ type: Actions.USER_REGISTER_SUCCESS });
      return response.data;
    })
    .catch((error: AxiosError) => {
      dispatch({
        type: Actions.USER_REGISTER_FAILURE,
        error
      });

      throw error;
    });
};

// Login action
export const loginUser: any = (data: any) => async (dispatch: Dispatch) => {
  dispatch({ type: Actions.USER_LOGIN_REQUEST });

  return axios.post(`${process.env.REACT_APP_SERVER_API}/user/login`, data)
    .then(response => {
      dispatch({ type: Actions.USER_LOGIN_SUCCESS });

      if (response.data.success) {
        localStorage.setItem("access-token", response.data.token);
        dispatch(loginWithToken(true));
      }
      return response.data;
    })
    .catch((error: AxiosError) => {
      dispatch({
        type: Actions.USER_LOGIN_FAILURE,
        error
      });

      throw error;
    });
};

// Login with JWT token action
export const loginWithToken: any = (refresh: boolean = true) => async (dispatch: Dispatch) => {
  if (refresh) {
    dispatch({ type: Actions.LOGIN_WITH_TOKEN_REQUEST });
  }

  const accessToken: string | null = localStorage.getItem("access-token");
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return axios.get(`${process.env.REACT_APP_SERVER_API}/user/access-token`)
    .then(response => {
      dispatch({
        type: Actions.LOGIN_WITH_TOKEN_SUCCESS,
        payload: response.data
      });

      return response.data;
    })
    .catch(error => {
      dispatch({
        type: Actions.LOGIN_WITH_TOKEN_FAILURE,
        error
      });

      localStorage.removeItem("access-token");
      throw error;
    });
};

// Logout user action
export const logoutUser: any = () => {
  localStorage.removeItem("access-token");
  return { type: Actions.USER_LOGOUT };
};