import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import ContactList from './components/ContactList'
import './mocks/randomUser'
import 'twin.macro'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div tw="max-w-md mx-auto bg-white p-4">
        <ContactList />
      </div>
    </Provider>
  )
}

export default App
