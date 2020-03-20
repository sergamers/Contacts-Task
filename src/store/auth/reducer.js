import * as actionType from '../auth/actionTypes';

const initialState = {
  token: sessionStorage.token ? JSON.parse(sessionStorage.token) :  '',
  username: sessionStorage.user ? JSON.parse(sessionStorage.user) :  '',
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SET_USER: {
      return {...payload};
    }
    case actionType.REMOVE_USER: {
      return {
        token: '',
        username: ''
      };
    }
    default:
      return state;
  }
};

export default userReducer;
