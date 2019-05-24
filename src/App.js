import React from 'react';
import './App.css';

import ParticlesContainer from './ParticlesContainer';

const content = [{
  class: 'fab fa-github',
  description: 'github',
  link: 'https://github.com/mhandria'
}, {
  class:'fab fa-linkedin-in',
  description: 'linkedin',
  link: 'https://www.linkedin.com/in/michael-handria/'
}, {
  class: 'far fa-file',
  description: 'resume',
  link: ''
}];

const getLinkList = (icons) => {
  return(
    <a href={icons.link}>
      <div className="link">
        <i className={icons.class}></i>
        <span>{icons.description}</span>
      </div>
    </a>
  );
}

function App() {

  let links = [];

  content.map((value, index) => {
    links.push(
    <React.Fragment key={index}>
      {getLinkList(value)}
    </React.Fragment>);
  });

  return (
    <div className="App">
      <ParticlesContainer>
        <div className="root">
          <span>hey, i'm</span>
          <h1>Michael Handria</h1>
          <div className="links">
            {links.map((value) => value)}
          </div>
        </div>
      </ParticlesContainer>
    </div>
  );
}

export default App;
