import React from 'react';
import CreateBook from './components/CreateBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import Bookedit from './components/Bookedit';

const App = () => {
    return (
        <div>
          <BrowserRouter>
          <Home/>
          <Routes>
          
            <Route element={<CreateBook/>} path='/create'/>
            <Route element={<Books/>} path='/books'/>
            <Route element={<Bookedit/>} path='/edit/:id'/>


          </Routes>
          </BrowserRouter>
        </div>
    );
}

export default App;
