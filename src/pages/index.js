import React from "react";
import Nav from '../components/nav';
import Splash from '../components/splash';
import Footer from '../components/footer';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <>
      <div className="home">
        <Nav />
        <Splash />
        <div className="latest">
            <span className="bar" />
            <div className="category">Latest</div>   
            <span className="bar" />
        </div>
        <div className="recipe-row">
        </div>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage;
