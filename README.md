# gatsby-starter-material-ui-blog-theme

This is a Gatsby Starter created to make using the [gatsby-starter-material-ui-blog-theme](https://www.npmjs.com/package/@greatgatsbyjs/gatsby-theme-ggt-material-ui-blog) [Gatsby Theme](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/) easy, with an example for quicker set up.

See the [Example Site](https://gatsby-theme-ggt-material-ui-blog.netlify.com/) to see the design :).

## Use the Starter

Gatsby Themes are currently in development so we use the `__expetimentalTheme` option, to resolve and pass in theme options within our `gatsby-config.js` file.

```
// gatsby-config.js
module.exports = {
  __experimentalThemes: [
    {
      resolve: '@greatgatsbyjs/gatsby-theme-ggt-material-ui-blog',
      options: {
        siteMetadata: {
          author: `@kalebmckelvey`, // author for each post in the rss feed
          avatarImgSrc: 'http://i.pravatar.cc/60', // the 60x60 avatar image for the homepage bio
          bioLineOne: 'Material UI Gatsby Theme', // the first line of the bio card on the home page
          bioLineTwo: 'Performant and easy!', // the second line of the bio card on the home page
          copyright: 'KMK Studios LLC', // the text shown on the bottom left of the footer
          description: 'test', // description of your site for your rss feed
          gATrackingID: 'GA-xxxxx', // google analytics tracking id
          icon: '/static/logo-256.png', // the icon used for your fav and manifest icon. 512px would be best
          manifestShortName: 'GGT Material UI Blog', // The shortname used in the manifest for offline capabilities
          pathPrefix: '/', // if you want to prefix your site with /blog or other options, do so here.
          postCardReadBtnText: 'Read More', // the text on each post preview button on the home page.
          postDateFormat: 'MMMM Do, YYYY', // the date format below each post
          postDefaultCategoryID: 'random', // default category id for each post
          rssUrl: '/rss.xml', // the rss feed url
          seoKeywords: ['seo word1', 'seo word2'], // keywords for your site passed to the SEO component
          sitemapUrl: '/sitemap.xml', // url of your sitemap - recommend leaving it default
          siteUrl: 'http://localhost:8000', // the url of your site
          tagline: 'High quality - simple set up!', // the tag line for the title of your blog
          title: `Great Gatsby JS Themes` // the title on the blog
        },
        // these colors are passed to the material-ui plugin to create material themes. Use this pallete to decide: https://material-ui.com/style/color/.
        // The recommendation is to pick a 400 level color as primary, and an a700 color as secondary.
        primaryColor: '#3f51b5',
        secondaryColor: '#00796b'
      }
    }
  ]
};
```

Now you will get all the functionality in your blog with a `gatsby-config.js` file and a `content/blog` directory.

Your example project will look like this:
```
content/
  blog/
      test-blog-post1.md
      test-blog-post2.md
      gatsby-themes-post.md
gatsby-config.js
package.json
```
First, install `node_modules` with `yarn`.
Second, make sure you have gatsby-cli, here's the [guide](https://www.gatsbyjs.org/docs/quick-start) to set up Gatsby
To run the blog locally, use `gatsby develop`. To create a product build, use `gatsby-build`, then deploy with your preferred hosting! (I recommend Netlify.)

## Override Components / Files (Component Shadowing)

To override a theme component, you will need to add `src/gatsby-theme-ggt-material-ui-blog` with the name of the file you want to override.

For example, if you would like to override the default `Bio` component:

```js
// src/gatsby-theme-egghead-blog/Bio/index.js
import React from 'react'

const Bio = (props) => (
  <div>hello all from my new blog!</div>
)

export default Bio
```

The bio component should then render instead of the default one!

*Note* I'm still working to make sure this feature works 100% - please let me know if there are any issues!