import React from 'react'
import ReactDOM from 'react-dom'

import App from './App.jsx'
import * as Sentry from '@sentry/react'
import MenuProvider from './hooks/useMenu.jsx'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn: 'https://b6593698b9e548e9acad79511aee20da@o573781.ingest.sentry.io/5724414',
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
