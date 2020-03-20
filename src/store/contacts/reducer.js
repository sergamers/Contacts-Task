import * as actionTypes from './actionsTypes';

const initialState = [];

export default function contactReducer(state=initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case actionTypes.SET_CONTACTS: {
            return payload;
        }
        case actionTypes.ADD_CONTACT: {
            return [payload, ...state];
        }
        case actionTypes.PATH_CONTACTS: {
            return payload;
        }
        default:
            return state;
    }
}