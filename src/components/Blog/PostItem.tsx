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

  :hover {
      a {
      color: #4A5056;
    }
  }
`


const ThumbnailImage = styled(GatsbyImage)`
  width: 240px;
  height: 160px;
  border-radius: 10px 10px 10px 10px;
  margin-right : 20px;
  object-fit: cover;
  object-position: center center;
`


const ThumbnailOverlay = styled.a`
  width: 170px;
  height: 170px;
  border-radius: 10px 10px 10px 10px;
  margin-right : 20px;
`

const PostItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 300px
  width : 50
  border-radius: 10px;
  flex-wrap: wrap;
  padding: 4px;
`


const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -5px;
`

const CategoryItem = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 3px;
  border-radius: 8px;
  background: #DEE2E6;

  :hover {
    color: '#FFFFFF'; 
    background: '#ADB5BD'; 
  }
`

const CategoryText = styled.span`
  padding: 4px 8px;
  color: gray;
  font-size: 6px;
  font-weight: 800;
  line-height: 12px;
`;



const Title = styled.div`
  display: -webkit-box;
  margin: 10px 0px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

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
  border-bottom: solid;
  color: #CED4DA;
  transition: all 300ms ease-out;
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
  font-size: 14px;
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
      {/* <ThumbnailOverlay className='overlay' /> */}
      <PostItemContent>
        <Category>
          {categories.map(item => (
            <CategoryItem to={`/blog/?category=${item}`} key={item}>
              <CategoryText>
                {item}
              </CategoryText>
            </CategoryItem>
          ))}
        </Category>
        <Title>{title}</Title>
        {/* <Date>{date}</Date> */}
        <Summary>{summary}</Summary>
        <PostLink to={link}>Read More</PostLink>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem