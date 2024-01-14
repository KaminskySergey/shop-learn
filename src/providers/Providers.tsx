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
import { SearchProvider } from './context-provider/SearchProvider'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ProviderOrder from './provider-order/ProviderOrder'

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
            <SearchProvider>
              <ProviderOrder>

{children}
              </ProviderOrder>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
            </SearchProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    )
}