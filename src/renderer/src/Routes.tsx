import { Route, Router } from 'electron-router-dom'

import { Blank } from './pages/blank'
import { Default } from './pages/layouts/default'
import { Document } from './pages/document'

export function Routes(): JSX.Element {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/documents/:id" element={<Document />} />
        </Route>
      }
    />
  )
}
