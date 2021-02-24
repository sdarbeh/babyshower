import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface n {
  w: any;
  theme: any
}

const Container = styled.div`
  text-transform: capitalize;
  color: ${(p:n) => p.w ? p.theme.globalColors.white : null};
  a {
    padding-right: 3px;
  }
  a:hover {
    text-decoration: underline;
  }
  a.nav-active {
    color: ${p => p.theme.currentThemeColor};
    font-weight: bold;
    text-decoration: unset;
  }
`

const min = (str: string) => str.split('-').join(' ')

interface p {
  whiteText?: boolean;
  customPaths?: string[]
}

export default ({whiteText, customPaths}: p) => {
  const { pathname } = window.location
  const [paths, setPaths] = useState<any>([])

  useEffect(() => {
    let arr: any = []
    let pathnames = pathname !== '/' ? pathname.split('/') : []

    if (customPaths) {
      pathnames = ['', ...customPaths]
    }
   
    pathnames.forEach((path: string) => {
      const prevPath = min(pathnames[pathnames.length - 2])
      const name = min(path)
      let arrow = ` › ${name}`

      switch (name) {
        case '':
          arr.push({ name: 'C&S Home', path })
          break;
        case prevPath:
          arr.push({ name: arrow, path: `/${path}` })
          break;
        default:
          arr.push({ name: arrow, path })
          break;
      }
    })
    setPaths(arr)
  }, [pathname, customPaths])

  if (paths.length === 0) return null
  return (
    <Container w={whiteText}>
      {paths.map((p: any, i: number) => (
        <Link to={p.path} key={i} className={i === paths.length - 1 ? 'nav-active' : ''}>
          {p.name}
        </Link>
      ))}
    </Container>
  )
}