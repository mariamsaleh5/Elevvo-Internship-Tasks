import "./card.css"
export default function Card({ post }) {
  return (
    <div className="card">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <span>{post.date}</span>
    </div>
  );
}
