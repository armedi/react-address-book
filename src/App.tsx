import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import ContactList from './components/ContactList'
import ContactDetail from './components/ContactDetail'
import 'twin.macro'
import './mocks/randomUser'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div tw="max-w-md mx-auto bg-white p-4">
        <ContactList />
        <ContactDetail />
      </div>
    </Provider>
  )
}

export default App
