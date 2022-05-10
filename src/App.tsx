import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Minting from './views/minting'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Minting />} />
      </Routes>
      <ToastContainer toastClassName={'custom-toast-container'} 
        autoClose={3000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme={'colored'}
      />
    </BrowserRouter>
  )
}

export default App
