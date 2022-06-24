// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css'

import { Route, Routes } from 'react-router-dom'
import Home from '../auth/Home'
import Login from '../auth/Login'
import Register from '../auth/Register'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
  )
}

export default App
