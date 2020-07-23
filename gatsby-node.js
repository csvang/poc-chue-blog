const path = require('path');

// REF: https://www.gatsbyjs.org/docs/node-apis/

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    /* Generates a SLUG 'field' */
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        //console.log(JSON.stringify(node, undefined, 4))
        //console.log ('[*****]', slug);

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}

// https://www.gatsbyjs.org/docs/node-apis/#createPages
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug
                    }
                  }
                }
              }
        }
    `);

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        //console.log('[***]', `/blog/${edge.node.fields.slug}`);
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}