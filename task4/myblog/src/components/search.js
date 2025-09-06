import "./search.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search here"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
