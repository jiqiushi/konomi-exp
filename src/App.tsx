import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom'

import { routes, Route as RouteType} from '../src/routes' // router

function App() {
  return (
    <Router>
      <Suspense>
        <Switch>
          {routes.map((route: RouteType) => {
            return (
              <Route
                key={route.name}
                path={route.path}
                element={<route.component />}
              />
            )
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
