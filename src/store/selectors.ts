import { createSelector } from 'reselect'
import { AddressBookState } from './types'

const getContactsState = (state: AddressBookState) => state.contacts
const getFocusedContactState = (state: AddressBookState) => state.focusedContact
export const getSearchedName = (state: AddressBookState) => state.searchedName
export const getNextPage = (state: AddressBookState) => state.nextFetchPage

export const getContacts = createSelector(
  [getContactsState, getSearchedName],
  (contacts, searchedName) =>
    Object.values(contacts).filter((contact) => {
      return (
        contact.name.first.match(new RegExp(searchedName, 'i')) ||
        contact.name.last.match(new RegExp(searchedName, 'i'))
      )
    })
)

export const getFocusedContact = createSelector(
  [getContactsState, getFocusedContactState],
  (contacts, focusedContact) => {
    if (focusedContact) return contacts[focusedContact]
  }
)
