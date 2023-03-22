import React from 'react';
import './App.css';
import Header from './components/header/index.jsx'
import Footer from './components/footer/index.jsx'
import LoginOption from './components/login-options/index.jsx'
import Input from './components/inputs/index.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <LoginOption />
      <Input />
      <Footer />
    </div>
  )

}
 