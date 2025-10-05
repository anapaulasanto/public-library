import axios from 'axios'
import { AppRouter } from './router'
import { AppContextProvider } from './context'

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL

function App() {
  return (
    <>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </>
  )
}

export default App
