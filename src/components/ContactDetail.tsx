import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { clearFocusedContact } from '../store/actions'
import { getFocusedContact } from '../store/selectors'

const ContactDetail: React.FC = () => {
  const dispatch = useDispatch()
  const contact = useSelector(getFocusedContact)

  const handleClose = useCallback(() => {
    dispatch(clearFocusedContact())
  }, [dispatch])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.which === 27) {
        handleClose()
      }
    }
    document.addEventListener('keyup', handler)
    return () => document.removeEventListener('keyup', handler)
  }, [handleClose])

  return (
    <div
      css={[
        tw`fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50`,
        contact ? tw`visible` : tw`invisible`,
      ]}
      onClick={handleClose}
    >
      <div
        css={[
          tw`fixed inset-0 transition-all`,
          contact
            ? tw`ease-out duration-300 opacity-100`
            : tw`ease-in duration-200 opacity-0`,
        ]}
      >
        <div tw="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div tw="w-full max-w-md mx-auto sm:p-4">
        <div
          css={[
            tw`relative bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all`,
            contact
              ? tw`ease-out duration-300 opacity-100 translate-y-0 sm:scale-100`
              : tw`ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`,
          ]}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <div tw="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              tw="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              aria-label="Close"
              onClick={handleClose}
            >
              <svg
                tw="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <Image src={contact?.picture.large} alt="profile picture" />
            <div tw="mt-4">
              <h3 tw="text-lg text-center leading-6 font-medium text-gray-900">
                {contact?.name.first} {contact?.name.last}
              </h3>
              <span tw="block text-sm text-center text-gray-500">
                {contact?.location.city}, {contact?.location.country}
              </span>
              <div tw="mt-3">
                <ContactItem>
                  <div tw="flex-1">
                    <span tw="block font-medium">{contact?.phone}</span>
                    <span tw="text-sm text-gray-500">phone</span>
                  </div>
                  <FontAwesomeIcon
                    tw="ml-4 text-blue-400 cursor-pointer"
                    icon={faPhone}
                    size="2x"
                    transform="shrink-5"
                  />
                </ContactItem>
                <ContactItem>
                  <div tw="flex-1">
                    <span tw="block font-medium">{contact?.cell}</span>
                    <span tw="text-sm text-gray-500">cell</span>
                  </div>
                  <FontAwesomeIcon
                    tw="ml-4 text-green-400 cursor-pointer"
                    icon={faWhatsapp}
                    size="2x"
                    transform="shrink-2"
                  />
                </ContactItem>
                <ContactItem>
                  <div tw="flex-1">
                    <span tw="block font-medium">{contact?.email}</span>
                    <span tw="text-sm text-gray-500">email</span>
                  </div>
                  <a href={`mailto:${contact?.email}`}>
                    <FontAwesomeIcon
                      tw="ml-4 text-orange-400 cursor-pointer"
                      icon={faAt}
                      size="2x"
                      transform="shrink-4"
                    />
                  </a>
                </ContactItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetail

const Image = styled.img`
  ${tw`-mx-4 -mt-5 h-64 object-cover`};
  width: calc(100% + 2rem);
  max-width: unset;
`

const ContactItem = styled.div`
  ${tw`border-b p-2 flex items-center`};

  :last-of-type {
    ${tw`border-b-0`}
  }
`
