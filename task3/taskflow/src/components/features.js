import "./features.css";

export default function Features() {
  return (
    <div className="features">
      <h2 className="features-title">Features</h2>
    <div className="features-list">
      <div className="feature_details">
        <span className="feature_name">list</span>
        <span className="feature_icon">🌟</span>
        <span className="feature_description">list tasks for the day</span>
      </div>

      <div className="feature_details">
        <span className="feature_name">plan</span>
        <span className="feature_icon">🚀</span>
        <span className="feature_description">plan tasks to make day productive</span>
      </div>

      <div className="feature_details">
        <span className="feature_name">tool</span>
        <span className="feature_icon">💡</span>
        <span className="feature_description">tools needed to do task</span>
      </div>
      </div>
    </div>
  );
}
