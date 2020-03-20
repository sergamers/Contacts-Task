import * as actionTypes from '../contacts/actionsTypes';
import contactsApi from "../../api/getContacts";




export const getContacts = () => async dispatch => {
  const userContacts = await contactsApi.getContacts(); // Список контактов на аккаунте
  dispatch(setContacts(userContacts))
};

export const deleteContact = (contacts, key) => dispatch => {
  const updateContacts = contacts.filter(item => item.key !== key);
  dispatch(setContacts(updateContacts))
};

export const pathContact = (contacts,updatedContact) => dispatch => {
  const updateContacts = contacts.map((el) => {
    if(el.key === updatedContact.key) {
      return updatedContact
    }
    return el
  });
  dispatch(setContacts(updateContacts))
}

export const setContacts = contacts => ({
  type: actionTypes.SET_CONTACTS,
  payload: contacts,
});

export const addContact = contact => ({
  type: actionTypes.ADD_CONTACT,
  payload: contact,
});


