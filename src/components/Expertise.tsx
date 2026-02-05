import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "SQL", 
    "Git",
    "Statsmodel"
];

const labelsSecond = [
    "Algorithms",
    "Data Structures",
    "LeetCode",
    "HackerRank",
    "Cs50",
    "UC San Diego",
    "MIT OCW"
];

const labelsThird = [
    "GitHub",
    "Data Science Projects",
    "CS50-Solutions",
    "LeetCode-Solutions",
    "HackerRank-Solutions",
    "Python",
    "SQL"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Python & Data Science </h3>
                    <p>I have 1+ year of experience in Python, building data science projects and solving algorithmic problems. I completed CS50's Python course and a Data Science course from FreeCodeCamp, creating about 5 hands-on projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Algorithms & Problem Solving</h3>
                    <p>I regularly solve coding challenges on LeetCode and HackerRank to strengthen my problem-solving and algorithmic skills. I have studied Algorithms & Data Structures courses from MIT and UC San Diego.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>
                    <h3>GitHub & Projects</h3>
                    <p>I maintain multiple GitHub repositories showcasing my work, including Data Science projects, CS50 solutions, LeetCode solutions, HackerRank solutions, and UC San Diego coursework.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;