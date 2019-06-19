import React from "react";

import { graphql } from 'gatsby';
import App from "../components/App";

const IndexPage = ({ data }) => (
    <App
    data={data}
    ></App>
)

export default IndexPage;

export const query = graphql`
query {
    contentfulIndex {
        name
        headerTitle
        headerSubtitle
        headerPill {
            text
            to {
                slug
            }
        }
        main {
            __typename
            ... on ContentfulTitlesAndThreeColumns {
                id
                title
                subtitle {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
                column1 {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
                column2 {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
                column3 {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
            }
            ... on ContentfulEvents {
                id
                title
                subtitle {
                    id
                    childMarkdownRemark {
                        html
                    }
                }
            }
            ... on ContentfulMembers {
                id
                title
                members {
                    id
                    name
                    position
                    company
                    image {
                        fluid {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        }
    }
}
`