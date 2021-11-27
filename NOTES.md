 # Notes on Gatsby

 gatsby new - new project

 gatsby develop - launch local server

 page component - contains all UI elements for a specific page of your site (Home, About)

 building-block component - smaller components that represent just a part of a page's UI (instead of an entire page). (Navbar, Sidebar, etc.)

 pre-built component - maintained by another package (such as Gatsby). You can import it and use it without knowing what's under the hood (Link)

 Gatsby is already configured with GraphQL and CSS Modules

 ## Plugins Used:
 - gatsby-plugin-image - responsive images
 - gatsby-plugin-sharp - dependency for gatsby-plugin-image
 - gatsby-source-filesystem - creates file nodes from files
 - gatsby-mdx-plugin - transformer plugin. see notes below.
 - @mdx-js/mdx - mdx plugin dependency
 - @mdx-js/react - mdx plugin dependency

 ### Plugin Notes:
 - install it.
 - add it to the `gatsby-config.js` file

 - gatsby-source-filesystem -- lets you query data ABOUT the files,  but doesn't let you use the data INSIDE the files themselves.

 - gatsby-plugin-mdx -- a transformer plugin! This takes the raw content from source plugins and *TRANSFORMS* it into something usable. gatsby-plugin-mdx specifically allows Markdown and JSX along side text content. gatsby-plugin-mdx will transform **file** nodes that have the `.mdx` extension into MDX nodes, which have a different set of fields that you can query using GraphQL.

 ## GraphQL Notes:
 useStaticQuery -> a pre-defined hook that lets you add GraphQL queries to BUILDING-BLOCK components. useStaticQuery allows you to define the query *INSIDE* the component. It takes 1 parameter: a templated string. It returns the requested data, which you can then store in a variable and use throughout the component.
 You can only call useStaticQuery once per file. If you need multiple fields, you can add them all into a single query.

 graphql -> in PAGE components, the useStaticQuery hook is not needed. You will do a basic page query using graphql alone. Also, your Graphql query needs to be defined *OUTSIDE* of the page component. Doing this will create a prop called `data`, which will hold the resulting data from the Graphql query.

 nodes -> In Graphql, inside the data layouer, information is stored in objects called **nodes**. Nodes are the smalled form unit of data in the data layer. Different source plugins create different types of nodes, each with their own properties. EX: gatsby-source-filesystem creates **file** nodes.

 query variables -> a way to send extra data along with your request. You can write dynamic queries that return different data based on the values you pass in.
 Inside GraphiQL: On the left, you build out your query using filter variables. The middle is where your new query will appear. The bottom, titles **Variable Queries** is where you *test* your query filter.

 EX:
 ```
 // top-middle GraphiQL query
 query MyQuery($slug: String) {
     mdx(slug: {eq: $slug}) {
         frontmatter {
             title
         }
     }
 }

 // bottom-middle "Query Variables" used for testing
 {"slug": "married-by-elvis"}
 ```
 **SIDENOTE** Query variables can only be used inside of page queries, **NOT** with `useStaticQuery`.

 ## MDX
 MDX - Markdown Language
 Frontmatter - additional metadata. Not rendered.
 Frontmatter example:
 ---
 name: "Fun Facts about Red Pandas"
 datePublished: "2021-07-12"
 auther; "#1 Red Panda Fan"
 ---

 `allMdx` and `mdx` = fields for GraphQL queries
 `MDXRenderer` component = for processing and displaying MDX content

 ## Gatsby File System Route API
 - Gatsby's File System Route API defines a special syntax for naming the files in your `src/pages` directory, which lets you dynaically create new pages for your site based on a **collection** of nodes in the data layer.

 EX: Your site had `Product` nodes in the data layer. You could use the File System Route API to create one product page template component. When your site renders, Gatsby will combine the page template with the data for each `Product` node and generate a new page for each product. If you need to make changes to the product page, you'll only have to edit the template component.

 **SIDENOTE** Gatsby's File System Route API automatically adds some props into the page template: `id` for the data layer node used to create the page, and the *field* you used to create the dynamic part of the route (ie, `slug` field).

 ### File System Rout API - How to create a collection route
 1. Decide what *type* of node you want to create pages from
 2. Choose which *field* on that node to use in the route (the URL) for your pages
 3. Create a new page component in your `src/pages` directory using the following naming convention: `{nodeType.field}.js`. DON'T FORGET to include the curly braces in your filenames to indicate the dynamic part of the route!

 EX: You want to create a separate page for each `Product` node, and you want to use the product's `name` field in the URL. You would create a new file at `src/pages/{Product.name}.js`. Then Gatsby would create those pages at routes like `/water-bottle` or `/sweatshirt` or `/notebook`.

 So, for the sake of this project, the `nodeType` is `mdx` and the `field` is `slug`, thus the blog page created in the `src/pages` directory is `src/pages/{mdx.slug}.js`.

 **SIDENOTE** `gatsby-plugin-mdx` automatically adds a `slug` field to each MDX node, which contains a string of the filename for the `.mdx` file. So, to create a dynamic blog page, create a new comp like this: `src/pages/{mdx.slug}.js` This will dynamically pull the slug info for the page wihin the URL path.

 ## gatsby-plugin-image
 - StaticImage -> For static image sources, the source for your image is always going to be the same every time the component renders.
 - GatsbyImage -> For dynamic image source, the image source gets passed in as a prop.