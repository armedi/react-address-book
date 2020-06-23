import { createSelector } from 'reselect'
import { AddressBookState } from './types'

const maxContacts = Number(process.env.REACT_APP_MAX_CONTACTS)

const getContactsState = (state: AddressBookState) => state.contacts
const getFocusedContactState = (state: AddressBookState) => state.focusedContact
export const getSearchedName = (state: AddressBookState) => state.searchedName

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

export const getIsSearching = createSelector(getSearchedName, Boolean)

export const getHasMoreToLoad = createSelector(
  getContactsState,
  (contacts) => Object.values(contacts).length < maxContacts
)
