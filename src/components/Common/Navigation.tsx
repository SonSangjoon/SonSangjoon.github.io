import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { Link } from 'gatsby'

const Navigation: FunctionComponent = function () {
  return (
    <NavWrapper>
      <Nav>
        <NavLink to="/">
          <LogoBox>
            onshore.
          </LogoBox>
        </NavLink>
        <NavBox>
          <NavLink to="/blog">
            blog
          </NavLink>
          <NavLink to="https://github.com/SonSangjoon" target="_blank">
            projects
          </NavLink>
          <NavLink to="https://github.com/SonSangjoon" target="_blank">
            github
          </NavLink>
        </NavBox>
      </Nav>
    </NavWrapper>
  )
}

export default Navigation



const NavWrapper = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 52px;

  justify-content: center;
  align-items: center;
  background-color: rgba(29,29,31,0.72);
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 10000;
`

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  width: 768px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }
`

const NavBox = styled.div`
  display: flex;
  gap: 10px;
`

const NavLink = styled(Link)`
  display: flex;
  font-size: 12px;
  alig-items: center;
  margin-left: 2rem;
  color: white;
  :hover {
    color: #4A5056;
  }
  transition: all 150ms ease-out;
`

const LogoBox = styled.div`
  font-size: 21px;
  font-weight: bold;
  color: white;
`