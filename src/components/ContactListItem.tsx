import React from 'react'
import { keyframes } from '@emotion/core'
import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Contact } from '../store/types'

const ContactListItem: React.FC<{ contact: Contact }> = ({ contact }) => {
  return (
    <Group className="group">
      <img tw="h-14 w-14 rounded-full" src={contact.picture.thumbnail} alt="" />
      <div tw="ml-4 flex-1">
        <p tw="leading-5 font-medium text-gray-700 group-hover:text-gray-900 mb-1">
          {contact.name.first} {contact.name.last}
        </p>
        <p tw="text-sm leading-4 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
          {contact.phone}
        </p>
      </div>
      <AnimatedIcon icon={faArrowAltCircleRight} size="2x" />
    </Group>
  )
}

export default ContactListItem

const backAndForth = keyframes`
  0% {
    left: 0;
  }
  50% {
    left: -0.75rem;
  }
  100% {
    left: 0;
  }
`

const AnimatedIcon = styled(FontAwesomeIcon)`
  ${tw`relative ml-4 text-orange-200`};
`

const Group = styled.div`
  ${tw`mb-3 px-4 py-3 rounded border border-gray-50 shadow flex items-center cursor-pointer`};
  :hover {
    ${AnimatedIcon} {
      animation: ${backAndForth} 1s ease-in-out infinite;
    }
  }
`
