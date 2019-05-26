/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const rootStyle = css`
    display: flex;
    flex-direction: column;
    color: white;
    font-family: 'Roboto';
    padding: 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    padding-bottom: 40px;
`;

const backStyle = css`
    color: white;
    text-decoration: none;
    flex: 1;
    position: relative;
    z-index: 1;
    padding: 10px;
`;

const experience = [{
    company: 'Activision Blizzard',
    location: 'Irvine, CA',
    position: 'Associate Software Engineer',
    workDates: 'June 2018 - Present',
    achievements: [
        'built an application that will automatically render a graph view given the nodes and transitions of each state (used to debug automated system workflow)',
        'maintained and built new UI for application that Customer Service representative would use for game support',
        'built and maintain data pipelines and systems that would help combat against game toxicity',
        'built an application that allowed C.S reps to annotate different chat data in order to provide new data to the A.I model',
        'worked with Flink and Kafka for real time data stream and Spark for data batch jobs',
        'help maintained regular timed jobs through airflow',
        'worked with big data and hadoop'
    ]
}, {
    company: 'The Walt Disney Company',
    location: 'Orlando, FL',
    position: 'Software Engineer Intern',
    workDates: 'May 2017 - Aug 2017',
    achievements: [
        'maintained an existing desktop application that extracted data from SOAP protocol and XML driven backend',
        'maintained existing android application developed in XAMARIN',
        'implemented new table features and pages, as well as updated existing UI/UX to give a more "materialize" feeling for both the desktop and mobile application',
        'optimize desktop and mobiel application by implementing asynchronous network calls to request thousands of high quality blueprint drawing and modularizing repetitive logic in source code',
        'develop a new web application done through Angular (front-end), with .Net Core, SQL Server and IIS (backend), as well as utilizing different libraries and concepts such as jQuery, AJAX, JSON, NOde.js and bootstrap'
    ]
}, {
    company: 'The Boeing Company',
    location: 'Long Beach, CA',
    position: 'Software Engineer Intern',
    workDates: 'Feb 2017 - May 2017',
    achievements: [
        'developed threaded functionalities to monitor robotic arm movements in order to determine which motors to turn on and off',
        'made test cases to debug and optimize "rotation detection" functionalities',
        'implemented software interrupts that would be utilized to determine when to spin a thread that will drive different motors on the robotic arm',
        'set up local GIT server on an Ubuntu server protected by RSA-encryption'
    ]
}];

const projects = [{
    name: 'Smart Home Audio',
    stack: 'Android | Java | Python',
    description: `
        A system that includes a mobile device (w/ app), local server, and speakers, supposed to provide its user with the experienceof surround sound.  
        As the user moves around his/her house, the speakers will adjust their volumes based on the user’s current location 
    `
}, {
    name: 'Smiish',
    stack: 'iOS | Swift | Node.js | Socket.io | Express | AWS EC2',
    description: `
        A simple chatting application that is made for iOS.  This application utilizes socket protocols and communicationhosted on an amazon Ubuntu Server EC2 instance.  
        The users can create rooms and use nicknames to chat with one another.
    `
}]

function ResumeSection(props) { 
    return(
        <div css={css`width:100%; display: flex; flex-direction: column;`}>
            <h3 css={css`font-weight: 100; color: #FF6666;`}>
                    {props.sectionTitle}
            </h3>
            {props.children}
        </div>
    )
}

function Resume(props) {
    return(
        <div css={rootStyle}>
            <div css={css`display: flex; width: 100%; align-items: center;`}>
                <Link to="/home" css={backStyle}>
                    <i className="fas fa-arrow-left"></i>
                </Link>
                    
                <div css={css`display: flex; align-items: center; flex-direction: column;`}>
                    <h3 css={css`margin: 0; font-weight: 100;`}>
                        Michael <b>Handria</b>
                    </h3>
                    <span><i css={css`color: #FF6666;`}>Software Engineer</i> - Computer Engineer</span>
                </div>
                <div css={css`flex: 1;`}></div>
            </div>     
            <ResumeSection sectionTitle="Education">
                    <h4 css={css`margin:0;`}>California State University, Long Beach (CSULB) - Graduated May 2018</h4>
                    <span>B.S Computer Engineer &amp; Computer Science <b>|</b> <i>(Cummulative)</i> GPA: 3.65 <b>|</b> <i>(Major)</i> GPA: 3.8 </span>
                    <ul>
                        <li>President's Honor List &amp; Dean's Honor List </li>
                    </ul>
            </ResumeSection>
            <ResumeSection sectionTitle="Expereince">
                {experience.map((value, index) => (
                        <React.Fragment key={index}>
                            <span>{value.company} - {value.location}</span>
                            <i>{value.position} - {value.workDates}</i>
                            <ul>
                                {value.achievements.map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))}
                            </ul>
                        </React.Fragment>
                    )
                )}
            </ResumeSection>
            <ResumeSection sectionTitle="Projects">
                {projects.map((value, index) => (
                    <React.Fragment key={index}>
                        <span>{value.name} - {value.stack}</span>
                        <ul>
                            <li>{value.description}</li>
                        </ul>
                    </React.Fragment>
                ))}
            </ResumeSection>
            <div
                css={css`
                    position: fixed;
                    bottom: 30px;
                    right: 10px;
                    border-radius: 100px;
                    border: 1px solid white;
                    padding: 10px;
                    z-index: 2;
                    cursor: pointer;
                    @media(max-width: 414px){
                        bottom: 10px;
                    }
                `}>
                <i class="fas fa-download"></i>
            </div>
        </div>
    );
}

export default Resume;