'use client'
import {PropsWithChildren} from 'react'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
  import { persistor, store } from '@/store/store'
  import { Provider } from 'react-redux'
  import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })

export default function Providers({ children }: PropsWithChildren) {
    return (
<QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
{children}
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    )
}