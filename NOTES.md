 gatsby new - new project

 gatsby develop - launch local server

 page component - contains all UI elements for a specific page of your site (Home, About)

 building-block component - smaller components that represent just a part of a page's UI (instead of an entire page). (Navbar, Sidebar, etc.)

 pre-built component - maintained by another package (such as Gatsby). You can import it and use it without knowing what's under the hood (Link)

 Gatsby is already configured with GraphQL and CSS Modules

 Plugins Used:
 - gatsby-plugin-image - responsive images
 - gatsby-plugin-sharp - dependency for gatsby-plugin-image
 - gatsby-source-filesystem - creates file nodes from files
 - 

 Plugin Notes:
 - install it.
 - add it to the `gatsby-config.js` file

 gatsby-source-filesystem -- lets you query data ABOUT the files,  but doesn't let you use the data INSIDE the files themselves.

 gatsby-plugin-mdx -- a transformer plugin! This takes the raw content from source plugins and TRANSFORMS it into something usable. gatsby-plugin-mdx specifically allows Markdown and JSX along side text content. gatsby-plugin-mdx will transform *file* nodes that have the `.mdx` extension into MDX nodes, which have a different set of fields that you can query using GraphQL.

 GraphQL Notes:
 useStaticQuery -> a pre-defined hook that lets you add GraphQL queries to BUILDING-BLOCK components. useStaticQuery allows you to define the query INSIDE the component. It takes 1 parameter: a templated string. It returns the requested data, which you can then store in a variable and use throughout the component.
 You can only call useStaticQuery once per file. If you need multiple fields, you can add them all into a single query.

 graphql -> in PAGE components, the useStaticQuery hook is not needed. You will do a basic page query using graphql alone. Also, your Graphql query needs to be defined OUTSIDE of the page component. Doing this will create a prop called `data`, which will hold the resulting data from the Graphql query.

 nodes -> In Graphql, inside the data layouer, information is stored in objects called *nodes*. Nodes are the smalled form unit of data in the data layer. Different source plugins create different types of nodes, each with their own properties. EX: gatsby-source-filesystem creates *file* nodes.

 MDX = Markdown Language
 Frontmatter = additional metadata. Not rendered.
 Frontmatter example:
 ---
 name: "Fun Facts about Red Pandas"
 datePublished: "2021-07-12"
 auther; "#1 Red Panda Fan"
 ---