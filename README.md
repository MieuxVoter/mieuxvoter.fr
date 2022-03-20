[![Netlify Status](https://api.netlify.com/api/v1/badges/10e21963-4d3d-493c-afc9-c168986f55f0/deploy-status)](https://app.netlify.com/sites/mieuxvoter/deploys)

This is the website of Mieux Voter (aka Better Vote). It is available online at [mieuxvoter.fr](https://mieuxvoter.fr).


## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Write blog article using MDX (extended version of Markdown)

1. Add a file on `content/blog/[slug].mdx` to write an article at `https://mieuxvoter.fr/blog/slug`.

2. Add meta contents as a YAML table as the beginning of your article, such as:

```yaml
---
title: 'Premier article'
author: 'Pierre-Louis Guhur'
assets:
  graph: 
    type: json
    path: 'example-plotly.json'
---
```

3. As seen above, you can add assets (stored in `content/assets`) as dictionary of file. In this case, you will be able to access those assets in your article, such as:

```mdx
<Plot {...graph} />
```

4. Yes, you can add JSX components, but that's not completely magical. Basic coponents (such as headers and paragraphs) are imported by the MDX plugin. Other (such as Plot) are directly imported in `pages/blog/[slug].js`.


## Write blog article using Wordpress

You can also a Wordpress CMS by modifying `.env`.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

