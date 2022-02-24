import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PostFrontmatterType } from 'types/PostItem.types'


type PostItemProps = PostFrontmatterType & { link: string }

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

  const time = new Date(date);
  const dataString = time.toDateString().split(" ")

  return (
    <PostItemWrapper >
      <ThumbnailContainer to={link}>
        <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
        <ThumbnailOverlay >
          <ThumbnailText>
            {dataString[2]}
          </ThumbnailText>
          <ThumbnailMonth>
            {dataString[1]}
          </ThumbnailMonth>
        </ThumbnailOverlay>
      </ThumbnailContainer>
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
        <Summary>{summary}</Summary>
        <PostLink to={link}>Read More</PostLink>
      </PostItemContent>
    </PostItemWrapper>
  )
}

export default PostItem


const ThumbnailContainer = styled(Link)`
  position: relative;
  margin-right : 20px;
`
const ThumbnailImage = styled(GatsbyImage)`
  width: 240px;
  height: 160px;
  border-radius: 10px;
  margin-right : 20px;
  object-fit: cover;
  object-position: center center;
`

const ThumbnailOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  

  position: absolute;
  width: 240px;
  height: 0px;
  border-radius: 10px;

  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  overflow: hidden;

  transition: 300ms ease-out;
`

const ThumbnailMonth = styled.p`
  color: black;
  font-size: 20px;
  position: absolute;
  top: 80%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

const ThumbnailText = styled.p`
  color: black;
  font-size: 80px;
  font-weight: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
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
const colorTransition = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`
const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 2px;
  flex-wrap: wrap;

  :hover {
    ${PostLink} {
      animation: ${colorTransition} 1s ease infinite; 
    }
    ${ThumbnailOverlay} {
      height: 100%;
    }
  }
`


