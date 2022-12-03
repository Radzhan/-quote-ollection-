import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateQuote from './components/CreateQuote/CreateQuote';
import Edit from './container/Edit/Edit';
import Navbar from './components/Navbar/Navbar';
import Quotes from './container/Quotes/Quotes';
import SubmitNewQuote from './container/SubmitNewQuote/SubmitNewQuote';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="App">
        <Routes>
          <Route path='/' element={(
            <Quotes />
          )}>
            <Route path='/quote/:name' element={(
              <CreateQuote/>
            )}/>
            <Route path='/' element={(
              <CreateQuote/>
            )}/>
          </Route>

          <Route path='/add-quote' element={(
            <SubmitNewQuote />
          )} />

          <Route path='/quotes/:id/edit' element={(
            <Edit/>
          )}/>

          <Route path='*' element={(<h1>Not found</h1>)} />
        </Routes>
      </div>
    </>
  );
}

export default App;
