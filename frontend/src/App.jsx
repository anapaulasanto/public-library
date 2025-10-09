import axios from 'axios'
import { AppRouter } from './router'
import { BookContextProvider } from './context'

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL

function App() {
  return (
    <>
      <BookContextProvider>
        <AppRouter />
      </BookContextProvider>
    </>
  )
}

export default App
