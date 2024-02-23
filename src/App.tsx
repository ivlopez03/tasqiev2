import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <div className='flex'>
      <Sidebar />
      <Outlet/>
    </div>
    </>
  )
}

export default App
