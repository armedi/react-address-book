import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import 'twin.macro'
import {
  getContacts,
  getHasMoreToLoad,
  getIsSearching,
} from '../store/selectors'
import { fetchContacts } from '../store/actions'
import ContactListItem from './ContactListItem'
import Loading from './Loading'

const ContactList: React.FC = () => {
  const dispatch = useDispatch()

  const loadMore = (page: number) => {
    dispatch(fetchContacts(page))
  }

  const contacts = useSelector(getContacts)
  const isSearching = useSelector(getIsSearching)
  const hasMore = useSelector(getHasMoreToLoad) && !isSearching

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<Loading key={0} tw="sm:col-span-2" />}
      tw="sm:grid sm:grid-cols-2 sm:col-gap-4"
    >
      {contacts.map((contact) => (
        <ContactListItem key={contact.phone} contact={contact} />
      ))}
    </InfiniteScroll>
  )
}

export default ContactList
