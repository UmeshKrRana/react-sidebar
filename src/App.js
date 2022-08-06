import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export const App = () => {
  return (
    <>
    <Header />

    <Router>
      <Sidebar />
      <Routes>
        <Route path='/home' element='' />
        <Route path='/categories' element='' />
        <Route path='/favourite' element='' />
        <Route path='/author' element='' />
        <Route path='/stages' element=''>
          <Route path='stages-1' element='' />
        </Route>
      </Routes>

    </Router>
      
    </>
  )
}