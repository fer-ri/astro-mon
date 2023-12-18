import { Site } from "@/config";
import type { CollectionEntry } from "astro:content";

export default (post: CollectionEntry<"posts">) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "Poppins",
        lineHeight: 1,
        padding: "4rem",
        backgroundColor: "#111827",
        borderWidth: "1rem",
        borderColor: "#374151",
      }}
    >
      <div
        style={{
          color: "#fff",
          flexGrow: 1,
          fontSize: "1.875rem",
          fontWeight: 700,
        }}
      >
        {Site.title}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          fontSize: "1rem",
          color: "#6b7280",
        }}
      >
        {post.data.publishDate.toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </div>

      <div
        style={{
          color: "#fff",
          fontSize: "5rem",
          fontWeight: 700,
        }}
      >
        {post.data.title}
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          fontSize: "1.125rem",
          color: "#6b7280",
        }}
      >
        {post.data.tags?.map((tag) => <span>#{tag}</span>)}
      </div>
    </div>
  );
};
