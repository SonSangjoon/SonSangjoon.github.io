import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import PostList from 'components/Blog/PostList'
import Icon from 'components/Common/Icon'
import { PostListItemType } from 'types/PostItem.types'

type SectionBlogProps = {
  edges: PostListItemType[]
  category: string
  title: string
}

const SectionBlog: FunctionComponent<SectionBlogProps> = function ({
  edges,
  category,
  title,
}) {
  const selectedCategory: string = category

  return (
    <Layout>
      <Top>
        <Title>{title}</Title>
        <Button to={`/blog?category=${category}`}>
          <Icon icon="arrowRight" />
        </Button>
      </Top>
      <PostList selectedCategory={selectedCategory} posts={edges} limit={5} />
    </Layout>
  )
}

export default SectionBlog

const Layout = styled.div`
  width: 768px;
  margin: 100px auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100vw;
    font-size: 12px;
  }
`
const Top = styled.div`
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
