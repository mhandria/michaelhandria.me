/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import { Link } from 'react-router-dom';
const rootStyle = css`
    color: white;
    font-family: 'Roboto', sans-serif !important;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const parentLinksStyle = css`
    margin-top: 10px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    z-index: 1;
    position: relative;
`;

const linkStyle = css`
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: column;
    cursor: pointer !important;
`;

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
    if(icons.link !== '') {
        return(
            <a
                css={css`
                    text-decoration: none;
                    color: white;
                `} 
                href={icons.link}>
                <div css={linkStyle}>
                    <i className={icons.class}></i>
                    <span css={css`font-size: 12px;`}>{icons.description}</span>
                </div>
            </a>
        );
    } else {
        return(
            <Link
                css={css`
                    text-decoration: none;
                    color: white;
                `}  
                to="/resume">
                <div css={linkStyle}>
                    <i className={icons.class}></i>
                    <span css={css`font-size: 12px;`}>{icons.description}</span>
                </div>
            </Link>
        );
    }
    
}

function Home() {
    let links = content.map((value, index) => (
        <React.Fragment key={index}>
            {getLinkList(value)}
        </React.Fragment>
    ));

    return (
        <div css={rootStyle}>
            <span css={css`font-size: 12px;`}>keep it simple &amp; clean</span>
            <h1 css={css`margin: 0;`}>Michael Handria</h1>
            <div css={parentLinksStyle}>
                {links.map((value) => value)}
            </div>
        </div>
    );
}

export default Home;