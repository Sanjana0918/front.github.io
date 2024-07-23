import React from "react";
import booksImage from "../Images/books.jpg";
import "./Home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/books");
  };
  return (
    <div className="books">
      <img src={booksImage} alt="Books" />
      <button className="btn" onClick={handleNavigate}>
        Read Books
      </button>

      <p className="bookpara">
        Books are timeless vessels of knowledge, imagination, and culture. They
        serve as windows to different worlds, eras, and perspectives, enriching
        the minds of readers with diverse experiences and insights. Through the
        written word, books can transport us to fantastical realms, unveil the
        mysteries of science, and unravel the complexities of human emotions and
        relationships. They foster empathy, provoke thought, and inspire change
        by allowing us to see the world through the eyes of others. In an era
        dominated by digital media, books remain a cherished medium, offering a
        unique, tactile experience and a refuge from the incessant noise of
        modern life. Whether consumed for education or leisure, books have an
        enduring power to enlighten, entertain, and transform.
      </p>
    </div>
  );
};

export default Home;
