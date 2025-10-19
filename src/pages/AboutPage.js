import React from "react";
import "../styles/about.css"; // Import the specific CSS for this page

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <header className="about-header">
        <h1>BloodStream</h1>
        <nav>
          <a href="/" className="home-btn">
            Home
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <img src="/image.png" alt="Blood Donation" className="about-img" />
          <div className="about-text">
            <h1>About Us</h1>
            <p>Together, We Save Lives</p>
          </div>
        </div>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a reliable and transparent platform that
          connects donors with those in need, ensuring safe and timely blood
          donations.
        </p>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <p className="subtitle">
            We ensure safe, reliable, and quick blood donation services
          </p>

          <div className="cards">
            <div className="card">
              <img
                src="https://img.icons8.com/color/96/clock--v1.png"
                alt="24/7"
              />
              <h3>24/7 Availability</h3>
              <p>
                Our donors and support team are always ready to respond in
                emergencies.
              </p>
            </div>

            <div className="card">
              <img
                src="https://img.icons8.com/color/96/verified-badge.png"
                alt="Verified Donors"
              />
              <h3>Verified Donors</h3>
              <p>
                Every donor is carefully verified to ensure safe and reliable
                donations.
              </p>
            </div>

            <div className="card">
              <img
                src="https://img.icons8.com/color/96/rocket--v1.png"
                alt="Quick Matching"
              />
              <h3>Quick Matching</h3>
              <p>
                Our system instantly connects patients with suitable donors near
                them.
              </p>
            </div>

            <div className="card">
              <img
                src="https://img.icons8.com/color/96/trust.png"
                alt="Trusted Platform"
              />
              <h3>Trusted Platform</h3>
              <p>
                Thousands of people trust us for life-saving donations and
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="card">
            📝 <h3>1. Register</h3>
            <p>Sign up as a donor on our platform.</p>
          </div>
          <div className="card">
            🔍 <h3>2. Find Match</h3>
            <p>Search donors by blood group and location.</p>
          </div>
          <div className="card">
            💉 <h3>3. Donate</h3>
            <p>Safe and verified donation process.</p>
          </div>
          <div className="card">
            ❤️ <h3>4. Save Lives</h3>
            <p>Your donation makes a difference!</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Be a Hero. Donate Blood. Save Lives.</h2>
        <a href="/login" className="btn-donor">
          Become a Donor
        </a>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; 2025 Blood Donation. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
