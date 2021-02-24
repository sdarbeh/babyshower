import React from 'react'
import { Hero } from './PageHeroStyle'

interface p {
  bg: string;
  children: any;
  title?: string;
  border?: boolean;
  withNav?: boolean;
}

export default (p: p) => {
  let { bg, children, title, border, withNav, ...rest } = p

  if (withNav) {
    border = true
  }
  return (
    <Hero
      bg={bg}
      border={border}
      withNav={withNav}
      {...rest}
    >
      <div className='content'>
        {title && <h1>{title}</h1>}
        {withNav ? <div className="hero-nav">{children}</div> : children}
      </div>
    </Hero>
  )
}