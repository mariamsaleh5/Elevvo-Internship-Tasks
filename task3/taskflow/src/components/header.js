import "./header.css";   

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">TaskFlow</h1>
      <p className="subtitle">
        Manage your tasks with ease and speed - be more productive every day!
      </p>
      <button className="btn">
        Start Now
      </button>
    </header>
  );
}
