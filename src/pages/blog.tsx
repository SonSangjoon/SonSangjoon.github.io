import React, { FunctionComponent, useMemo } from 'react'
import { graphql } from 'gatsby'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import queryString, { ParsedQuery } from 'query-string'
import styled from '@emotion/styled'

import { PostListItemType } from 'types/PostItem.types'

import CategoryList, { CategoryListProps } from 'components/Blog/CategoryList'
import PostList, { PostType } from 'components/Blog/PostList'
import Template from 'components/Common/Template'


type BlogPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
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


const BlogPage: FunctionComponent<BlogPageProps> = function ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory: string =
    typeof parsed.category !== 'string' || !parsed.category
      ? 'All'
      : parsed.category

  const categoryList = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryList'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostType,
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  )
  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Container>
        <CategoryList
          selectedCategory={selectedCategory}
          categoryList={categoryList}
        />
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </Container>

    </Template>
  )
}

export default BlogPage

export const getBlogList = graphql`
  query getBlogList {
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


const Container = styled.div`
  width: 768px;
  margin: 100px auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%
    font-size: 12px;
  }
`