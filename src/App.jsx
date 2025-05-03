import React from "react";
import logo from "./assets/logo.png";
import arrowIcon from "./assets/right-arrow.png";
import illustration from "./assets/illustration.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon6.png";
import icon7 from "./assets/icon7.png";
import peopleIcon from "./assets/like.png";
import buildingIcon from "./assets/buildingicon.png";
import handshakeIcon from "./assets/handshake.png";
import mobile from "./assets/mobile.png";













function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{ height: "60px", objectFit: "contain" }}
        />

        {/* Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {["Home", "Features", "Community", "Blog", "Pricing"].map((item) => (
              <li
                key={item}
                style={{
                  cursor: "pointer",
                  transition: "0.3s all",
                }}
                onMouseOver={(e) => (e.target.style.color = "#2DBF7E")}
                onMouseOut={(e) => (e.target.style.color = "#000")}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            style={{
              backgroundColor: "#2DBF7E",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "0.5s all",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#27a96f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2DBF7E")}
          >
            Register Now
            <img src={arrowIcon} alt="Arrow" style={{ width: "10px", color: "green" }} />
          </button>
        </nav>
      </header>
      <div className="header-content">
        <div className="text">
            <h1>Lessons and insights <span className="span">from 8 years</span></h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button className="btn"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "0.5s all",
            
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#27a96f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2DBF7E")}
          >
            Register
          </button>
        </div>

            <div className="img">
            <img src={illustration} alt="Illustration" />

            </div>

      </div>

      <section className="section">
            <h2 className="our">Our Clients</h2>
            <p className="working">We have been working with some Fortune 500+ clients</p>
            <div className="icons">
            <img className="ic" src={icon1} alt="Illustration" />
            <img className="ic2" src={icon2} alt="Illustration" />
            <img className="ic3" src={icon3} alt="Illustration" />
            <img className="ic4" src={icon4} alt="Illustration" />
            <img className="ic5" src={icon5} alt="Illustration" />
            <img className="ic6" src={icon6} alt="Illustration" />
            <img className="ic7" src={icon7} alt="Illustration" />








            </div>
            <h2 className="community-title">Manage your entire community in a single system</h2>
            <div className="community-boxes">
        <div className="box">
          <img src={peopleIcon} alt="Membership" className="box-icon" />
          <h3>Membership Organisations</h3>
          <p>
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
        <div className="box">
          <img src={buildingIcon} alt="National" className="box-icon" />
          <h3>National Associations</h3>
          <p>
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        <div className="box">
          <img src={handshakeIcon} alt="Clubs" className="box-icon" />
          <h3>Clubs And Groups</h3>
          <p>
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>
      </div>
      </section>

      <div className="footer">

            <div className="img">
            <img src={mobile} alt="Illustration" />

            </div>
        <div className="tkst">
            <h1 className="unseen">The unseen of spending three years at Pixelgrade</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className="btn"
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "0.5s all",
            
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#27a96f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2DBF7E")}
          >
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
