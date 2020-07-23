import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

import styleBlogPost from '../styles/blogs.scss';

function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <h2>Blog</h2>
            <div>
            {
                    data.allMarkdownRemark.edges.map( (blog) => 
                        <Link className={styleBlogPost.blogPost} to={`/blog/${blog.node.fields.slug}`}> 
                            <h3>{ blog.node.frontmatter.title }</h3>
                            { blog.node.frontmatter.date }
                        </Link>
                    )

                }
            </div>
        </Layout>
    )
}

export default Blog;