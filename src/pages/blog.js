import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'

// {data} is coming from export const query. The Graphql query creates the data prop
const BlogPage = ({data}) => {
    return (
        <div>
            <Layout pageTitle="My Blog Posts">
                    {
                        data.allMdx.nodes.map(node => (
                            <article key={node.id}>
                                <h2>{node.frontmatter.title}</h2>
                                <h3>Author: {node.frontmatter.author}</h3>
                                <p>Posted: {node.frontmatter.date}</p>
                                <MDXRenderer>
                                    {node.body}
                                </MDXRenderer>
                            </article>
                        ))
                    }
            </Layout>
        </div>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order:DESC}) {
            nodes {
                frontmatter{
                    author
                    date(formatString: "MMM DD, YYYY")
                    title
                }
                id
                body
            }
        }
    }
`

export default BlogPage
