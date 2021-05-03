import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
