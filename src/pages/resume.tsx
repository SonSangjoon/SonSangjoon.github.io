import React, { FunctionComponent } from 'react'
import Template from 'components/Common/Template'
import { graphql } from 'gatsby'

type ResumePageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
  }
}


const ResumePage: FunctionComponent<ResumePageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
  },
}) {

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image=""
    >
    </Template>
  )
}

export default ResumePage


export const getResumePage = graphql`
  query getResumePage {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`