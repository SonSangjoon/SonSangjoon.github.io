import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const NavWrapper = styled.header`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 52px;

  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: saturate(180%) blur(10px);
  z-index: 1000;
`

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 768px;
  margin: 12px auto;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    width: 100vw;
    font-size: 12px;
  }
`

const NavBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`

const NavLink = styled(Link)`
  display: flex;
  font-size: 12px;
  alig-items: center;
  margin-left: 20px;
  color: #333d48;
  :hover {
    color: #b0b8c1;
  }
  transition: all 150ms ease-out;
`

const LogoBox = styled.div`
  font-size: 21px;
  font-weight: bold;
  color: #3182f6;
`

const Navigation: FunctionComponent = function () {
  return (
    <NavWrapper>
      <Nav>
        <NavLink to="/">
          <LogoBox>onshore.</LogoBox>
        </NavLink>
        <NavBox>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="https://github.com/SonSangjoon" target="_blank">
            github
          </NavLink>
        </NavBox>
      </Nav>
    </NavWrapper>
  )
}

export default Navigation
