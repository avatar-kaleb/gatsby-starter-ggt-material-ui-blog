# gatsby-starter-material-ui-blog-theme

This is a Gatsby Starter created to make using the [gatsby-starter-material-ui-blog-theme](https://www.npmjs.com/package/@greatgatsbyjs/gatsby-theme-ggt-material-ui-blog) [Gatsby Theme](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/) easy, with an example for quicker set up.

See the [Example Site](https://gatsby-theme-material-ui-blog.netlify.com/) to see the design :).

## Use the Starter

### 🚀 Quick start

1. **Install Gatsby-CLI.**

Here's the [guide](https://www.gatsbyjs.org/docs/quick-start) to set up Gatsby

1.  **Create Your Blog Dir w/ Gatsby CLI**

    Use the Gatsby CLI to create a new site with the starter link

    ```sh
    # create a new Gatsby site using the blog starter
    gatsby new my-new-blog git@github.com:greatgatsbyjsthemes/gatsby-starter-ggt-material-ui-blog.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-new-blog/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._


Gatsby Themes are passed as a plugin, and we can use theme options within our `gatsby-config.js` file to override **options**. Configure your theme by passing in the siteMetadata options you want :)

  ```
  // gatsby-config.js
  module.exports = {
    plugins: [
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
            manifest: {
              backgroundColor: '#e0e0e0',
                shortName: 'GGT Material UI Blog', // The shortname used in the manifest for offline capabilities
                themeColor: '#0D47A1'
            },
            pathPrefix: '/', // if you want to prefix your site with /blog or other options, do so here.
            postCardReadBtnText: 'Read More', // the text on each post preview button on the home page.
            postDateFormat: 'MMMM Do, YYYY', // the date format below each post
            postDefaultCategoryID: 'random', // default category id for each post
            rssUrl: '/rss.xml', // the rss feed url
            seoKeywords: ['seo word1', 'seo word2'], // keywords for your site passed to the SEO component
            sitemapUrl: '/sitemap.xml', // url of your sitemap - recommend leaving it default
            siteUrl: 'http://localhost:8000', // the url of your site
            tagline: 'High quality - simple set up!', // the tag line for the title of your blog,
            theme: {
              // these colors are passed to the material-ui plugin to create material themes. Use this pallete to decide: https://material-ui.com/style/color/.
              // The recommendation is to pick a 400 level color as primary, and an a700 color as secondary.
              primary: '#3f51b5',
              secondary: '#00796b'
            }
            title: `Great Gatsby JS Themes` // the title on the blog
          },
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

**Open the source code and start editing!**

  To write a new blog, simply create a new md or mdx file in the content/blog directory and you should see it on your home page!

## Add Your Profile Image

To add a new profile image to the index page, you can either link directly to a file you have hosted somewhere by using the `avatarSrcImage` field within the gatsby-config site metadata, or follow the steps below to add one to the starter.

1. Create a static folder at the root of the starter
2. Add your image, for example I added `profile-image.png`
3. Edit `gatsby-config` to use that image by using the exact same file name with extension to the siteMetadata field
4. Restart your dev server andsee your image :)


## Override Components / Files (Component Shadowing)

To override a theme component, you will need to add `src/@greatgatsbyjs/gatsby-theme-ggt-material-ui-blog/<dir>` with the name of the file you want to override.

For example, if you would like to override the default `Bio` component:

  ```js
  // src/@greatgatsbyjs/gatsby-theme-ggt-material-ui-blog/Bio/index.js
  import React from 'react'

  const Bio = (props) => (
    <div>hello all from my new blog!</div>
  )

  export default Bio
  ```

The bio component should then render instead of the default one!

## Contact Kaleb

If you're downloading the theme and having any issues, please let me know via a github issue or through Twitter: @KalebMcKelvey

Thank you for using and would love to hear how I can make it better for you!