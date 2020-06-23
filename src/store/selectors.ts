import { createSelector } from 'reselect'
import { AddressBookState } from './types'

const maxContacts = Number(process.env.REACT_APP_MAX_CONTACTS)

const getContactsState = (state: AddressBookState) => state.contacts
const getFocusedContactState = (state: AddressBookState) => state.focusedContact

/**
 * get value of name that is being searched
 */
export const getSearchedName = (state: AddressBookState) => state.searchedName

/**
 * get contacts data as Array filtered by searched name if available.
 */
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

/**
 * get detail of contact that is selected to be displayed in detail
 */
export const getFocusedContact = createSelector(
  [getContactsState, getFocusedContactState],
  (contacts, focusedContact) => {
    if (focusedContact) return contacts[focusedContact]
  }
)

/**
 * get wether the app is in searching mode or not
 */
export const getIsSearching = createSelector(getSearchedName, Boolean)

/**
 * determine is there any more data to be loaded,
 * false if maximum number of allowed contacts reached.
 */
export const getHasMoreToLoad = createSelector(
  getContactsState,
  (contacts) => Object.values(contacts).length < maxContacts
)
