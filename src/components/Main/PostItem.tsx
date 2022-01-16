import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 2px;
  flex-wrap: wrap;
`

const Overlay = styled.div`

`

const ThumbnailImage = styled(GatsbyImage)`
  width: 170px;
  height: 170px;
  border-radius: 10px 10px 10px 10px;
  margin-right : 20px;
  object-fit: cover;
  object-position: center center;
`

const PostItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 300px
  width : 50
  padding: 30px 30px;
  border-radius: 10px;
  flex-wrap: wrap;
  a {
    transition: all 150ms ease-out;

    :hover {
      color: #FF965B;
    }
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
`
const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`
const PostLink = styled(Link)`
  display: contents;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  cursor: pointer;
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -5px;
`

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
  color: #FF965B;
`

const Summary = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: auto;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  opacity: 0.8;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <PostItemWrapper >
      <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <Overlay />
      <PostItemContent>
        <Category>
          {categories.map(item => (
            <CategoryItem key={item}>#{item}</CategoryItem>
          ))}
        </Category>
        <>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Summary>{summary}</Summary>
          <PostLink to={link}>Read More </PostLink>
        </>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem