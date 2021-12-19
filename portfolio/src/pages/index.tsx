import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/GlobalStyle'
// import ProfileImage from 'containers/ProfileImage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
    return (
        <Container>
            <GlobalStyle />
            {/* <ProfileImage /> */}
        </Container>
    )
}

export default IndexPage