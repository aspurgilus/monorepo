import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { store } from './store'
import App from './app/App'
import './firebase'

export const muiCache = createCache({
  'key': 'mui',
  'prepend': true
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CacheProvider value={muiCache}>
          <App />
        </CacheProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
