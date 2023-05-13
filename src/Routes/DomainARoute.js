import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../ServiceContainer/DomainA/Index';

function DomainARoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
          <Route index element={<Index />} />
          <Route path="blogs" element={<h1>Hello DomainA Blogger</h1>} />
          <Route path="contact" element={<h1>Hello DomainA contact</h1>} />
          <Route path="*" element={<h1>404 DomainA Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default DomainARoute;