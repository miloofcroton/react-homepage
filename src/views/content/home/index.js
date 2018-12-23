import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-grow: 1;
  padding: 50px;
  height: 100%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0;

    span {
      display: inline-block;
    }
  }

  .tile {
    margin: 10px;
    border: 1px solid black;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    height: 100%;

    a {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 50px;

      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
        z-index: -1;
      }

      span {
        display: none;
        color: black;
      }

      &:hover img {
        opacity: 0.5;
      }

      &:hover span {
        display: inline-block;
      }

    }

  }
`;

const Home = () => {
  return (
    <HomeSection>
      <div id="work" className="tile">
        <Link to="/work">
          <img src="/src/assets/categories/code.jpg" alt="code"/>
          <span className="summary">Work</span>
        </Link>
      </div>
      <div id="play" className="tile">
        <Link to="/play">
          <img src="/src/assets/categories/nature.jpg" alt="nature"/>
          <span className="summary">Play</span>
        </Link>
      </div>
      <div id="thoughts" className="tile">
        <Link to="/thoughts">
          <img src="/src/assets/categories/thinker.jpg" alt="thinker"/>
          <span className="summary">Thoughts</span>
        </Link>
      </div>
    </HomeSection>
  );
};

export default Home;
