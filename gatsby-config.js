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
