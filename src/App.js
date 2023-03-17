import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path={'/user/add'} element={<UserDetails />} />
          <Route path={`/user/:userId`} element={<UserDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

