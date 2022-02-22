

import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import emoji from './../../assets/emoji.gif'

const ImgWrapper = styled.img`
  height: 300px;
  width: 300px;
`
const Layout = styled.div`
  display: flex;
  margin-top: 50px;
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