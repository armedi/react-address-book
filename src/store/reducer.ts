import { normalize, schema } from 'normalizr'
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_SUCCESS,
  SET_FOCUSED_CONTACT,
  SET_SEARCHED_NAME,
  AddressBookState,
  Contact,
  ContactsActionType,
} from './types'

const initialState = {
  contacts: {},
  searchedName: '',
  nextFetchPage: 1,
  error: undefined,
  loading: false,
}

const reducer = (
  state: AddressBookState = initialState,
  action: ContactsActionType
): AddressBookState => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return { ...state, loading: true }
    case FETCH_CONTACTS_FAILURE:
      return { ...state, loading: false, error: action.message }
    case FETCH_CONTACTS_SUCCESS:
      return addContacts(state, action.contacts)
    case SET_FOCUSED_CONTACT:
      return {
        ...state,
        focusedContact: action.contact
          ? action.contact.cell || action.contact.phone
          : undefined,
      }
    case SET_SEARCHED_NAME:
      return {
        ...state,
        searchedName: action.name,
      }
    default:
      return state
  }
}

export default reducer

// addContacts take new contacts data, normalize it and merge with existing data
const addContacts = (
  state: AddressBookState,
  contacts: Contact[]
): AddressBookState => {
  const contactsSchema = [
    new schema.Entity(
      'contacts',
      {},
      {
        idAttribute: (value) => value.cell || value.phone,
      }
    ),
  ]

  const normalizedContacts = normalize(contacts, contactsSchema).entities
    .contacts

  return {
    ...state,
    loading: false,
    contacts: Object.assign({}, state.contacts, normalizedContacts),
    nextFetchPage: state.nextFetchPage + 1,
  }
}
