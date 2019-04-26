var plugins = [{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md",".markdown"]},
    },{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Great Gatsby JS Themes","short_name":"GGT Material UI Blog","description":"test","start_url":"","background_color":"#e0e0e0","theme_color":"#0D47A1","display":"minimal-ui","icon":"/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/@greatgatsbyjs/gatsby-theme-ggt-material-ui-blog/static/logo-256.png"},
    },{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n        {\n          site {\n            siteMetadata {\n              rssMetadata {\n                site_url\n                feed_url\n                title\n                description\n                image_url\n                author\n                copyright\n              }\n            }\n          }\n        }\n      ","feeds":[{"query":"\n            {\n              allMdx(\n                limit: 1000,\n                sort: { order: DESC, fields: [frontmatter___date] },\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    timeToRead\n                    fields { slug }\n                    frontmatter {\n                      title\n                      date\n                      category\n                      tags\n                    }\n                  }\n                }\n              }\n            }\n          ","output":"/rss.xml","title":"Blog RSS Feed"}]},
    },{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","query":"\n          {\n            site {\n              siteMetadata {\n                siteUrl\n              }\n            }\n\n            allSitePage(\n              filter: {\n                path: {\n                  regex: \"/^(?!\\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories)).*$/\"\n                }\n              }\n            ) {\n              edges {\n                node {\n                  path\n                }\n              }\n            }\n        }"},
    },{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-plugin-material-ui/gatsby-ssr'),
      options: {"plugins":[],"theme":{"palette":{"primary":{"main":"#3f51b5"},"secondary":{"main":"#00796b"}},"typography":{"useNextVariants":true}}},
    },{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"head":false,"anonymize":true,"respectDNT":true},
    },{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-plugin-typography/gatsby-ssr'),
      options: {"plugins":[],"pathToConfigModule":"/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/@greatgatsbyjs/gatsby-theme-ggt-material-ui-blog/src/utils/typography.js"},
    },{
      plugin: require('/Users/kmckelvey/github/business/starters/gatsby-starter-material-ui-blog-theme/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
