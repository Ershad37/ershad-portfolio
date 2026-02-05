import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2026 - Present"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">
      Algorithms & Data Structures
    </h3>
    <h4 className="vertical-timeline-element-subtitle">
      UC San Diego (Online)
    </h4>
    <p>
      Currently studying Algorithms and Data Structures, focusing on efficient
      algorithms, complexity analysis, and problem-solving using Python.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2025"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">
      Algorithms & Data Structures
    </h3>
    <h4 className="vertical-timeline-element-subtitle">
      MIT OpenCourseWare (Online)
    </h4>
    <p>
      Studied algorithms and data structures for two months, covering core
      concepts such as sorting, recursion, and algorithmic thinking.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2025 - Present"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">
      Algorithms Practice
    </h3>
    <h4 className="vertical-timeline-element-subtitle">
      LeetCode & HackerRank
    </h4>
    <p>
      Actively solving algorithm and data structure problems to improve
      problem-solving skills and write clean, efficient Python solutions.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2025"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">
      Data Science with python
    </h3>
    <h4 className="vertical-timeline-element-subtitle">
      freeCodeCamp
    </h4>
    <p>
      Completed a 4-month Data Science course, building multiple projects focused
      on data analysis, visualization, and machine learning using Python.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2024 - 2025"
    iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">
      Introduction to Programming with Python
    </h3>
    <h4 className="vertical-timeline-element-subtitle">
      Harvard CS50 (Online)
    </h4>
    <p>
      Completed CS50’s Introduction to Programming with Python over several months,
      gaining strong foundations in programming, problem-solving, and Python basics.
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>


      </div>
    </div>
  );
}

export default Timeline;