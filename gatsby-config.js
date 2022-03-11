require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: '.env'
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://cfund.me",
    title: "CFUND - Indonesia’s First Crypto Hedge Fund",
    description: "TAMING THE CRYPTO MARKET. Helping you navigate the digital market. One stop solution for Navigating the Crypto Market",
    image: "/logo-meta.jpg"
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-WHLH06TJ08",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'db80d842-0185-4580-98e4-dff5ed3a2c59',
        enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80
      }
    }
  ],
};
