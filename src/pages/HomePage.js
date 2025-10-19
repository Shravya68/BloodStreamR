import React from "react";
import { Link } from "react-router-dom"; // 1. Import the Link component
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assests/BloodDonation.json";
import "../styles/home.css";

function HomePage() {
  return (
    <div>
      <header className="home-header">
        <div className="logo">🩸 BloodStream</div>
        <nav>
          {/* 2. Replace all <a> tags with <Link> and href with "to" */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* 3. Corrected the path for Sign Up */}
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <Player
          src={animationData}
          className="lottie-player-container"
          loop
          autoplay
        />

        <div className="hero-text">
          <h1>Become a Donor</h1>
          <p>
            One drop of blood can save a life. Be the reason for someone’s
            heartbeat.
          </p>
          <Link to="/signup" className="btn">
            Donate Now
          </Link>
        </div>
      </section>

      <section className="quotes">
        <h2>Why Donate Blood?</h2>
        <div className="quote-card">
          <p>“Your blood can give someone another chance at life.”</p>
        </div>
        <div className="quote-card">
          <p>“Be a hero in someone’s story. Donate blood.”</p>
        </div>
        <div className="quote-card">
          <p>
            “A single pint can save three lives. A single gesture can create a
            million smiles.”
          </p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 BloodStream | Built with ❤️ for saving lives</p>
      </footer>
    </div>
  );
}

export default HomePage;
