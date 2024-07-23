import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutUs">
      <h1 className="main-heading">ABOUT</h1>
      <div className="about">
        <h2 className="heading">About Us</h2>
        <p className="para">
          Welcome to our online bookstore, the ultimate destination for book
          lovers! My name is Priyanshu Jaiswal, and I am thrilled to share my
          passion for reading and technology with you through this platform.
        </p>
      </div>

      <div className="about">
        <h2 className="heading">Who We Are</h2>
        <p className="para">
          At [Your Bookstore's Name], we believe that books are more than just
          words on paper. They are gateways to new worlds, ideas, and
          perspectives. Our mission is to provide you with a diverse selection
          of books that cater to all interests and tastes. Whether you're
          looking for the latest bestseller, a timeless classic, or a hidden
          gem, you'll find it here.
        </p>
      </div>

      <div className="about">
        <h2 className="heading">Our Story</h2>
        <p className="para">
          The idea for this bookstore was born out of my love for reading and my
          background in technology. I have always been fascinated by the power
          of books to educate, inspire, and entertain. Combining this passion
          with my skills in web development, I decided to create a platform
          where book enthusiasts like myself can discover and enjoy a wide range
          of books.
        </p>
      </div>

      <div className="about">
        <h2 className="heading">Our Technology</h2>
        <p className="para">
          This website is built using the MERN stack (MongoDB, Express.js,
          React, and Node.js), which allows for a seamless and responsive user
          experience. By leveraging these modern technologies, we've created a
          site that's not only easy to navigate but also fast and reliable. Our
          goal is to make your book browsing and shopping experience as
          enjoyable as possible.
        </p>
      </div>
    </div>
  );
};

export default About;
