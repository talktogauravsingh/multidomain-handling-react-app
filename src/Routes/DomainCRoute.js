import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../ServiceContainer/DomainC/Index';

function DomainCRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
          <Route index element={<Index />} />
          <Route path="blogs" element={<h1>Hello DomainC Blogger</h1>} />
          <Route path="contact" element={<h1>Hello DomainC contact</h1>} />
          <Route path="*" element={<h1>404 DomainC Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default DomainCRoute;