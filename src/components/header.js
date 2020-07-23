import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyle from './header.module.scss'

function Header() {
    // "Tagged template literal"
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }      
    `);

    return (
        <header>
            <h1>{data.site.siteMetadata.title}</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={headerStyle.navLinkItem} activeClassName={headerStyle.activeNavLinkItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyle.navLinkItem}  activeClassName={headerStyle.activeNavLinkItem}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyle.navLinkItem}  activeClassName={headerStyle.activeNavLinkItem}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyle.navLinkItem}  activeClassName={headerStyle.activeNavLinkItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header