import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/details/:bookId" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
