import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_FAILURE,
  FETCH_CONTACTS_SUCCESS,
  AddressBookState,
  FetchContactsActionTypes,
} from './types'

const initialState = {
  data: [],
  error: undefined,
  loading: false,
}

const reducer = (
  state: AddressBookState = initialState,
  action: FetchContactsActionTypes
): AddressBookState => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return { ...state, loading: true }
    case FETCH_CONTACTS_FAILURE:
      return { ...state, loading: false, error: action.message }
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.contacts),
      }
    default:
      return state
  }
}

export default reducer
