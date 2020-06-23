import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import ContactSearchBox from './components/ContactSearchBox'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import 'twin.macro'
import logo from './assets/address-book.png'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div tw="max-w-screen-md mx-auto bg-white p-4 min-h-screen">
        <img src={logo} alt="logo" tw="mx-auto" />
        <ContactSearchBox />
        <ContactList />
        <ContactDetail />
      </div>
    </Provider>
  )
}

export default App
