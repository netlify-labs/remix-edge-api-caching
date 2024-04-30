import type { MetaFunction, LoaderFunction } from "@netlify/remix-runtime";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Edge Rendered HN" },
    { name: "description", content: "Demo of Edge Rendering with Remix" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  return (await fetch(new URL(`/.netlify/functions/stories`, request.url))).json();
};

interface Story {
  id: string;
  title: string;
}

export default function Index() {
  const stories = useLoaderData() as Story[];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Hackernews</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>{story.title}</li>
        ))}
      </ul>
    </div>
  );
}
