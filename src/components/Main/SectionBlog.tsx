import React, { FunctionComponent } from 'react'
import PostList from 'components/Blog/PostList'

import { PostListItemType } from 'types/PostItem.types'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'



type SectionBlogProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}


const SectionBlog: FunctionComponent<SectionBlogProps> = function ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  const selectedCategory: string = 'All'


  return (
    <PostList selectedCategory={selectedCategory} posts={edges} />
  )
}

export default SectionBlog

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`;