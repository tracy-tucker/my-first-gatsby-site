import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

// {data} is coming from export const query. The Graphql query creates the data prop
const BlogPage = ({data}) => {
    return (
        <div>
            <Layout pageTitle="My Blog Posts">
                <ul>
                    {data.allFile.nodes.map((node, index) => (
                        <li key={index}>
                            {node.name}
                        </li>
                    ))}
                </ul>
            </Layout>
        </div>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export default BlogPage
