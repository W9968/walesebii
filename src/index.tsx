import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import * as Sentry from '@sentry/react'
import MenuProvider from './hooks/useMenu'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
