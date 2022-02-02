import emoji from './../../assets/emoji.gif'

import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const ImgWrapper = styled.img`
  height: 300px;
  width: 300px;
`
const Layout = styled.div`
  display: flex;
  justify-content: center;
`

const Emoji: FunctionComponent = function () {
  return (
    <Layout>
      <ImgWrapper src={emoji} alt="Otter dancing with a fish" />

    </Layout>
  )
}

export default Emoji