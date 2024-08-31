import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryclient= new QueryClient()
const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
        <QueryClientProvider client={queryclient}>
        {children}  

          </QueryClientProvider> 
    </Provider>
  )
}

export default ReduxProvider
