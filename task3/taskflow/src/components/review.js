import  "./review.css"
function Reviews() {
  return (
    <section className="reviews">
      <h2>What Our Users Say</h2>
      <div className="review-list">
        <div className="review-card">
          <p>"The app is amazing and very easy to use!"</p>
          <span>- Ali</span>
        </div>
        <div className="review-card">
          <p>"It saved me a lot of time in my work."</p>
          <span>- Maryam</span>
        </div>
        <div className="review-card">
          <p>"I highly recommend anyone to try it."</p>
          <span>- Sarah</span>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
