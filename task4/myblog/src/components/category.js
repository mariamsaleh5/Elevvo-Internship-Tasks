import "./category.css";

export default function Category({ category, setCategory }) {
  return (
    <div>
      <h2 className="cat-title">Categories</h2>
      <div className="category-container">
        <button
          className={`category-button ${category === "Tech" ? "active" : ""}`}
          onClick={() => setCategory("Tech")}
        >
          Tech
        </button>
        <button
          className={`category-button ${category === "Sports" ? "active" : ""}`}
          onClick={() => setCategory("Sports")}
        >
          Sports
        </button>
        <button
          className={`category-button ${category === "Lifestyle" ? "active" : ""}`}
          onClick={() => setCategory("Lifestyle")}
        >
          Lifestyle
        </button>
        <button
          className={`category-button ${category === "all" ? "active" : ""}`}
          onClick={() => setCategory("all")}
        >
          All
        </button>
      </div>
    </div>
  );
}
