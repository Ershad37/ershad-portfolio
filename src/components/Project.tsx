import React from "react";
import dataScienceImg from '../assets/images/DataScience.jpg';
import leetcodeImg from '../assets/images/leetcode.png';
import cs50Img from '../assets/images/cs50.png';
import ucsdImg from '../assets/images/UCSanDiego.png';
import hackerrankImg from '../assets/images/HackerRank.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

  {/* Data Science Projects */}
  <div className="project">
    <a href="https://github.com/Ershad37/Data-Science-Projects" target="_blank" rel="noreferrer">
      <img src={dataScienceImg} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/Ershad37/Data-Science-Projects" target="_blank" rel="noreferrer">
      <h2>Data Science Projects</h2>
    </a>
    <p>
      A collection of data science projects built with Python, including data analysis,
      visualization, and machine learning using Pandas, NumPy, Matplotlib, and Scikit-learn.
    </p>
  </div>

  {/* UC San Diego */}
  <div className="project">
    <a href="https://github.com/Ershad37/UC-San-Diego" target="_blank" rel="noreferrer">
      <img src={ucsdImg} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/Ershad37/UC-San-Diego" target="_blank" rel="noreferrer">
      <h2>Algorithms & Data Structures (UC San Diego)</h2>
    </a>
    <p>
      Coursework and implementations from the Algorithms and Data Structures program by UC San Diego,
      focusing on efficient algorithms, complexity analysis, and problem-solving.
    </p>
  </div>

  {/* HackerRank */}
  <div className="project">
    <a href="https://github.com/Ershad37/HackerRank-Solutions" target="_blank" rel="noreferrer">
      <img src={hackerrankImg} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/Ershad37/HackerRank-Solutions" target="_blank" rel="noreferrer">
      <h2>HackerRank Solutions</h2>
    </a>
    <p>
      Python solutions to HackerRank challenges, covering algorithms, data structures,
      and problem-solving fundamentals.
    </p>
  </div>

  {/* CS50 */}
  <div className="project">
    <a href="https://github.com/Ershad37/Cs50-Solutions" target="_blank" rel="noreferrer">
      <img src={cs50Img} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/Ershad37/Cs50-Solutions" target="_blank" rel="noreferrer">
      <h2>CS50 Python Solutions</h2>
    </a>
    <p>
      Problem sets and assignments from Harvard's CS50 Introduction to Programming with Python,
      demonstrating strong Python fundamentals and clean code.
    </p>
  </div>

  {/* LeetCode */}
  <div className="project">
    <a href="https://github.com/Ershad37/LeetCode-Solutions" target="_blank" rel="noreferrer">
      <img src={leetcodeImg} className="zoom" alt="thumbnail" width="100%" />
    </a>
    <a href="https://github.com/Ershad37/LeetCode-Solutions" target="_blank" rel="noreferrer">
      <h2>LeetCode Solutions</h2>
    </a>
    <p>
      A collection of Python solutions to LeetCode problems, focused on algorithms,
      data structures, and optimized problem-solving techniques.
    </p>
  </div>

</div>

    </div>
    );
}

export default Project;