import { Dispatch } from 'redux'
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_SUCCESS,
  FetchContactsActionTypes,
} from './types'

export const fetchContacts = (page: number = 1) => async (
  dispatch: Dispatch<FetchContactsActionTypes>
) => {
  try {
    dispatch({ type: FETCH_CONTACTS_REQUEST })
    const response = await fetch(
      `https://randomuser.me/api/?page=${page}&results=50&seed=abc`
    )
    const json = await response.json()
    dispatch({ type: FETCH_CONTACTS_SUCCESS, contacts: json })
  } catch (error) {
    dispatch({ type: FETCH_CONTACTS_FAILURE, message: error.message })
  }
}
