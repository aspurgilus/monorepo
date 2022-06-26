import { Route, Routes } from 'react-router-dom'
import Home from '../auth/Home'
import Login from '../auth/login/Login'
import Register from '../auth/Register'

import '../theme'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
