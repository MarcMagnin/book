import React, { PropTypes } from 'react'
import Link from 'next/link'
//import Link from 'next/prefetch'


const links = [
  { href: '/', text: 'Home' },
  { href: '/dashboards', text: 'Dashboards', authRequired: false },
  { href: '/about', text: 'About' },
  { href: '/auth/sign-in', text: 'Sign In', anonymousOnly: true },
  { href: '/auth/sign-off', text: 'Sign Off', authRequired: true }
]

const getAllowedLinks = isAuthenticated => links.filter(l => !l.authRequired || (l.authRequired && isAuthenticated))
  .filter(l => !isAuthenticated || (isAuthenticated && !l.anonymousOnly))

const Header = ({ isAuthenticated, currentUrl }) => (
  <div className="header">
    {getAllowedLinks(isAuthenticated).map(l => (
      <Link key={l.href} href={l.href}>
        <a className={currentUrl === l.href ? "headerlink active" : "headerlink"}>
          {l.text}
        </a>
      </Link>
    ))}
  </div>
)

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired
}

export default Header

  // <style jsx global>{`
      
  //       .headerlink {
  //         margin-right: 20px;
  //         font-size: 14px;
  //         color: #999;
  //         text-decoration: none;
  //         text-transform: uppercase;
  //         padding-top: 2px;
  //         padding-bottom: 2px;
  //         border-top: 1px solid transparent;
  //         border-bottom: 1px solid transparent;
  //         transition: color .25s;
  //         font-weight: 400;
  //       }
  //       .headerlink:hover {
  //         color: #333;
  //         text-decoration: none;
  //       }
  //       .headerlink.active {
  //         color: #333;
  //         border-top: 1px solid #333;
  //         border-bottom: 1px solid #333;
  //         font-weight: 600;
  //       }
        
      
  //    `}</style>