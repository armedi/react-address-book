import React from 'react'
import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ContactSearchBox: React.FC = () => {
  return (
    <div className="sticky top-4 z-10">
      <Overlay />
      <div className="flex rounded-md shadow-sm mb-6 border border-gray-50 shadow relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-6 w-6 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        </div>
        <Input placeholder="John Doe" />
        <div className="absolute inset-y-0 right-0 text-gray-400 text-xl flex items-center pr-4">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  )
}

export default ContactSearchBox

const Overlay = styled.div`
  ${tw`h-20 w-full absolute top-0 -m-4`};
  width: calc(100% + 2rem);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 86%,
    rgba(255, 255, 255, 0) 100%
  );
`

const Input = styled.input`
  ${tw`form-input border-0 block h-12 w-full rounded-md pr-10 pl-12 transition ease-in-out duration-150 focus:outline-none focus:shadow-outline-orange text-lg leading-5 font-medium text-gray-700`}
  ::placeholder {
    ${tw`font-normal`}
  }
`
