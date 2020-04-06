import React from 'react';
import BookList from './components/BooksList'
import BookDetail from './components/BookDetail'
import './App.css'

const App = () => {
  return (
    <div className="body " >
      <div>
        <h1>Book List</h1>
        <h2> Select A Book And Get Detail About Book</h2>
      </div>

      <div className="container mt-5 ml-5 " >

        <div className="mb-5"> <BookDetail /></div>
        <br />
        <div ><BookList /></div>
      </div>
    </div>
  );
}

export default App;
