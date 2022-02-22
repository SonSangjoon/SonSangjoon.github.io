import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { Link } from 'gatsby'

const Navigation: FunctionComponent = function () {
  return (
    <NavWrapper>
      <Nav>
        <NavLink to="/">
          <LogoBox>
            onshore
          </LogoBox>
        </NavLink>
        <NavBox>
          <NavLink to="/">
            projects
          </NavLink>
          <NavLink to="/">
            techblog
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
  background-color: white;
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
    width: 100%
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
`

const LogoBox = styled.div`
font-size: 21px;
font-weight: bold;
`