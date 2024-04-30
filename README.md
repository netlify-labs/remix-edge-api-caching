# Fast Edge Rendering with Remix

Edge rendering can be fast if combined with edge API caching. This is a simple example of using Remix with edge rendering and Netlify Functions as a backend for the front-end that uses stale-while-revalidate to keep API responses fast at the edge.

It renders a plain list of the latest stories from Hacker News. In `app/_index.tsx` a loader fetches the storeis from a Netlify Function. The function uses the Stale While Revalidate approach to keep responses fast and cached at the edge when deployed to Netlify.

Read more about the approach in this guide to [Fast Edge Rendering with API Caching](https://developers.netlify.com/guides/how-to-make-edge-rendering-fast/)

##

## Netlify Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you're ready to go!

### Serve your site locally

To serve your site locally in a production-like environment, run

```sh
netlify serve
```

Your site will be available at [http://localhost:8888](http://localhost:8888). Note that it will not auto-reload when you make changes.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```
