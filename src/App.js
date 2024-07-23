import React from "react";
import Header from "./componenets/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./componenets/Home";
import AddBook from "./componenets/AddBook";
import Books from "./componenets/Book/Books";
import About from "./componenets/About";
import BookDetail from "./componenets/Book/BookDetail";
import BookDelete from "./componenets/Book/BookDelete";
import BuyBooks from "./componenets/Book/BuyBooks";
import Contact from "./componenets/Book/Contact";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetail />} exact />
          <Route path="/delete" element={<BookDelete />} exact />
          <Route path="/buy-book" element={<BuyBooks />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
