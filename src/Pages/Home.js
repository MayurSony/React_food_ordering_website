import React from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import Banner from "../Images/banner.jpeg";
import "../Styles/HeaderStyles.css";
import "../Styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;