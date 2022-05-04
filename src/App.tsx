import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './views/landing'
import Minting from './views/minting'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mint" element={<Minting />} />
        {/* <Route path='/mint' element={<MintingPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
