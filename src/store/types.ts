// Describing the Contact
export interface Contact {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: string
    city: string
    state: string
    postcode: string
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  dob: {
    date: string
    age: number
  }
  phone: string
  cell: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

// Describing the state of Address Book
export interface AddressBookState {
  data: Contact[]
  error?: string
  loading: boolean
}

// Describing the different ACTION NAMES available
export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST'
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE'
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS'

interface FetchContactsRequestAction {
  type: typeof FETCH_CONTACTS_REQUEST
}

interface FetchContactsFailureAction {
  type: typeof FETCH_CONTACTS_FAILURE
  message: string
}

interface FetchContactsSuccessAction {
  type: typeof FETCH_CONTACTS_SUCCESS
  contacts: Contact[]
}

// Describing the actions available
export type FetchContactsActionTypes =
  | FetchContactsRequestAction
  | FetchContactsFailureAction
  | FetchContactsSuccessAction
