import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from '../ServiceContainer/DomainB/Index';

export class DomainBRoute extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
          <Route index element={<Index />} />
          <Route exact path="/blogs" element={<h1>Hello DomainB Blogger</h1>} />
          <Route exact path="/contact" element={<h1>Hello DomainB contact</h1>} />
          <Route path="*" element={<h1>404 DomainB Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    )
  }
}

export default DomainBRoute;