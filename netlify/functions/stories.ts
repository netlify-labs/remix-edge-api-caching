export default async () => {
    const resp = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const ids = await resp.json();
  
    const stories = await Promise.all(
      ids.slice(0,100).map(async (id) => {
        const story = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return story.json();
      })
    );
  
    return new Response(JSON.stringify(stories), {
      headers: {
        "content-type": "application/json",
        "netlify-cdn-cache-control":
          "public, max-age=0, stale-while-revalidate=86400",
      }
    });
  };