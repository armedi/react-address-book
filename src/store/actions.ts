import { Dispatch } from 'redux'
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_SUCCESS,
  SET_FOCUSED_CONTACT,
  SET_SEARCHED_NAME,
  Contact,
  FetchContactsActionTypes,
} from './types'

/**
 * Fetch paginated contacts data from randomuser.me api
 */
export const fetchContacts = (page: number) => async (
  dispatch: Dispatch<FetchContactsActionTypes>
) => {
  try {
    dispatch({ type: FETCH_CONTACTS_REQUEST })
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=50&seed=abc&inc=name,location,email,cell,phone,picture`
    )
    const json = await response.json()
    dispatch({ type: FETCH_CONTACTS_SUCCESS, contacts: json.results })
  } catch (error) {
    dispatch({ type: FETCH_CONTACTS_FAILURE, message: error.message })
  }
}

/**
 * Set which contact will be displayed in detail
 */
export const setFocusedContact = (contact: Contact) => {
  return {
    type: SET_FOCUSED_CONTACT,
    contact,
  }
}

/**
 * Set the contact that will be displayed in detail to be none
 */
export const clearFocusedContact = () => {
  return {
    type: SET_FOCUSED_CONTACT,
    contact: null,
  }
}

/**
 * Set value for name that want to be searched
 */
export const setSearchedName = (name: string) => {
  return {
    type: SET_SEARCHED_NAME,
    name,
  }
}
