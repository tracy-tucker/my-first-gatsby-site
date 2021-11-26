 gatsby new - new project

 gatsby develop - launch local server

 page component - contains all UI elements for a specific page of your site (Home, About)

 building-block component - smaller components that represent just a part of a page's UI (instead of an entire page). (Navbar, Sidebar, etc.)

 pre-built component - maintained by another package (such as Gatsby). You can import it and use it without knowing what's under the hood (Link)

 Gatsby is already configured with GraphQL and CSS Modules

 Plugin Notes:
 - install it.
 - add it to the `gatsby-config.js` file

 GraphQL Notes:
 useStaticQuery -> a pre-defined hook that lets you add GraphQL queries to BUILDING-BLOCK components. It takes 1 parameter: a templated string. It returns the requested data, which you can then store in a variable and use throughout the component.
 You can only call useStaticQuery once per file. If you need multiple fields, you can add them all into a single query.

 graphql -> in PAGE components, the useStaticQuery hook is not needed. You will do a basic page query using graphql alone.