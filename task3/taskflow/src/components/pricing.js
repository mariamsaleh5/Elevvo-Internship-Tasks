import "./pricing.css"
export default function Pricing() {
  return (
    <div className="pricing-div">
      <div className="pricing-list">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>Free</p>
          <button>Select</button>
        </div>
        <div className="pricing-card">
          <h3>Pro Plan</h3>
          <p>$10/month</p>
          <button>Select</button>
        </div>
        <div className="pricing-card">
          <h3>Premium Plan</h3>
          <p>$20/month</p>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}
