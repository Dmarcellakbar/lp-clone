const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://blog.cfund.me/wp-json/wp/v2/posts?_fields=id,excerpt,content,title,date,_links,_embedded&per_page=3&_embed`)
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    data: resultData,
    // required fields
    id: `blog-post-data`,
    parent: null,
    children: [],
    internal: {
      type: `BlogPostData`,
      contentDigest: createContentDigest(resultData),
    },
  })
}


exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/sign|reset|coming/)) {
    page.context.layout = "bare";
    createPage(page);
  }
};
  