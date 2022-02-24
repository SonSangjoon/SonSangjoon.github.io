import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import PostList from 'components/Blog/PostList'
import Icon from 'components/Common/Icon'
import { PostListItemType } from 'types/PostItem.types'

import { Link } from 'gatsby'


type SectionBlogProps = {
  edges: PostListItemType[]
}


const SectionBlog: FunctionComponent<SectionBlogProps> = function ({ edges }) {

  const selectedCategory: string = 'All'

  return (
    <Layout>
      <Header>
        <Title>
          Blog
        </Title>
        <Button to="/blog">
          <Icon icon="arrowRight" />
        </Button>
      </Header>
      <PostList selectedCategory={selectedCategory} posts={edges} />
    </Layout>
  )
}

export default SectionBlog

const Layout = styled.div`
  width: 768px;
  margin: 100px auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%
    font-size: 12px;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 50px;
`
const Title = styled.div`
  line-height: 50px;
  width: 160px;    
  font-size: 30px;

  border-bottom: solid;
`

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  border: 1px solid rgb(222, 226, 230);
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px;
  cursor: pointer;

  :hover {
    background-color: white;
  }
`
