import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store'
import { fetchContacts } from '../store/actions'
import ContactListItem from './ContactListItem'

const ContactList: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const { contacts } = useSelector((state: AppState) => state)
  return (
    <div className={className}>
      {Object.values(contacts).map((contact) => (
        <ContactListItem key={contact.phone} contact={contact} />
      ))}
    </div>
  )
}

export default ContactList
