import { useState } from "react";
import SearchBar from "./search";
import Category from "./category";
import "./home.css"
import Card from "./card";
export default function Home({ posts }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const postsperpage=6;

  
  const filteredPosts = posts.filter((post) => {
    const matchCategory = category === "all" || post.category === category;
    const matchSearch = post.title.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchSearch;
  });
  const end_index=page*postsperpage;
  const start_index=end_index-postsperpage;
  const current_posts=filteredPosts.slice(start_index,end_index);
const  total_pages=Math.ceil(filteredPosts.length/postsperpage);
  return (
    <div>
     
      <SearchBar query={query} setQuery={setQuery} />
      <Category category={category} setCategory={setCategory} />

        <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          class="btn-design"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          {page} / {total_pages}
        </span>
        <button
          class="btn-design"
          disabled={page === total_pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
      {filteredPosts.length === 0 ? (
        <p class="no-posts">No posts found</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {current_posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      )}

      

    </div>
  );
}
