import type { } from "next";
import { getItem } from "../lib";
import "../_style/article.css"

export default async function Top20IdRoute({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await getItem(id);

  const kids = await Promise.all(
    item.kids.map((kidsItem: any) => getItem(kidsItem))
  );

  return (
    <article>
      <h1>{item.title}</h1>
      <p>by {item.by} on {new Date(item.time * 1000).toLocaleString()}</p>
      <p>{item.text}</p>
      <p><a href={item.url}>{item.url}</a></p>

      <h2>Comments</h2>
      {kids.map((kidsItem) => (
        <div key={kidsItem.id}>
          <h3>by: {kidsItem.by}</h3>
          <p>{kidsItem.text}</p>
          <p>{new Date(kidsItem.time * 1000).toLocaleString()}</p>
          <hr />
        </div>
      ))}
    </article>
  );
}