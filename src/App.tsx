import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import ContactSearchBox from './components/ContactSearchBox'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import 'twin.macro'
import './mocks/randomUser'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div tw="max-w-md mx-auto bg-white p-4 min-h-screen">
        <ContactSearchBox />
        <ContactList />
        <ContactDetail />
      </div>
    </Provider>
  )
}

export default App
