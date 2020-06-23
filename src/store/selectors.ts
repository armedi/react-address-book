import { createSelector } from 'reselect'
import { AddressBookState } from './types'

const getContactsState = (state: AddressBookState) => state.contacts
const getFocusedContactState = (state: AddressBookState) => state.focusedContact

export const getContacts = createSelector(getContactsState, (contacts) =>
  Object.values(contacts)
)

export const getFocusedContact = createSelector(
  [getContactsState, getFocusedContactState],
  (contacts, focusedContact) => {
    if (focusedContact) return contacts[focusedContact]
  }
)
