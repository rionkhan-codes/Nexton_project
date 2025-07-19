import { useState } from 'react'

import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'


function App() {
const myRoute = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<LayoutOne/>}>
    <Route index element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    

    </Route>
  </Route>
))
  return (
    <>
   <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
