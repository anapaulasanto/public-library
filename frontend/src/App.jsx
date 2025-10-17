import axios from 'axios'
import { AppRouter } from './router'
import { BookContextProvider } from './context/BookContext'
import { UserContextProvider } from './context/UserContext'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <BookContextProvider>
            <AppRouter />
          </BookContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
