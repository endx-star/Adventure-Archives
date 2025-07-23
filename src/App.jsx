import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './users/pages/users'
import Places from './places/pages/places'
import MainNavigation from './shared/components/Navigation/mainNavigation'

function App() {
  return(
    <Router>
      <MainNavigation />
      <main className="mt-36 sm: mt-60">
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/places/new" exact element={<Places />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
