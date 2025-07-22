import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './users/pages/users'
import Places from './places/pages/places'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<Places />} />
      </Routes>
    </Router>
  )
}

export default App
