import React from 'react';

import Header from './header';
import Footer from './footer';

import  '../styles/index.scss';
import layoutStyles from './layout.module.scss'

function Layout(props){
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                <div className={layoutStyles.childrenBody}>{props.children}</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout