import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreaetQuote from './components/CreateQuote/CreaetQuote';
import Edit from './components/Edit/Edit';
import Navbar from './components/Navbar/Navbar';
import Quotes from './container/Quotes/Quotes';
import SubmitNewQuote from './container/SubmitNewQuote/SubmitNewQuote';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header><div className="App">
        <Routes>
          <Route path='/' element={(
            <Quotes />
          )}>
            <Route path='/quote/:name' element={(
              <CreaetQuote/>
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
