import * as actionTypes from './actionTypes';
import mockApi from "../../api/mock";
import { message } from "antd";

export const setToken = (values) => async dispatch => {
  try {
    const { token,username } = await mockApi.checkUser(values);
    sessionStorage.setItem('token',  JSON.stringify(token));
    sessionStorage.setItem('user',  JSON.stringify(username));
    dispatch(setUser({ token, username }))
  } catch (e) {
    message.error('Неверный логин или пароль')
  }
};

export const closeApp = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  return {
    type: actionTypes.REMOVE_USER,
    payload: {},
  }
};

export const setUser = user => ({
  type: actionTypes.SET_USER,
  payload: user,
});


