import axios from 'axios'
import { AppRouter } from './router'
import { BookContextProvider } from './context/BookContext'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from './context/AuthContext'

const queryClient = new QueryClient()
axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <BookContextProvider>
              <AppRouter />
            </BookContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
