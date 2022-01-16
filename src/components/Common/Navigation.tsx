import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const NavWrapper = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
  position: fixed;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  justify-contents: auto;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const NavButton = styled.div`
    justify-content: center;
`

const Navigation: FunctionComponent = function () {
    return (
        <NavWrapper>
            <NavButton>
            </NavButton>
        </NavWrapper>
    )
}

export default Navigation