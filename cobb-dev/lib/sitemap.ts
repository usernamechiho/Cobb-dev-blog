import fs from 'fs';
import axios from 'axios';

async function createSitemap() {
  const allPosts = await axios.get('https://cobb-dev-backend-u8nfg.ondigitalocean.app/api/articles');

  const postUrls = allPosts.data.data.map(
    (post: { id: number; attributes: { title: string; }; }) => `<url>
                      <loc>http://cobb-dev.com/blog/${post.id}?title=${post.attributes.title}</loc>
                    </url>`
  );

  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>http://cobb-dev.com/blog</loc>
    </url>
    <url>
        <loc>http://cobb-dev.com/owner-description</loc>
    </url>
    <url>
      <loc>http://cobb-dev.com/blog-description</loc>
    </url>
    <url>
      <loc>http://cobb-dev.com/send-email</loc>
    </url>
        ${postUrls.join('\n')}
    </urlset>`.replace(/\n|\t/g, ' ');

  await fs.promises.writeFile('public/sitemap.xml', sitemap, {
    encoding: 'utf-8',
  });
}

createSitemap();
