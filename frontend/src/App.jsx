import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SipCalculator from "./components/SipCalculator";
import LearnPage from "./components/LearnPage";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#0047AB",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "18px",
  };

  const appStyle = {
    fontFamily: "Poppins, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f7f9fb",
    minHeight: "100vh",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  return (
    <Router>
      <div style={appStyle}>
        <h1 style={{ textAlign: "center", color: "#0047AB" }}>
          📈 Mutual Fund Helper
        </h1>

        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            🏠 Home
          </Link>
          <Link to="/learn" style={linkStyle}>
            📚 Learn
          </Link>
          <Link to="/sip" style={linkStyle}>
            💰 SIP
          </Link>
          <Link to="/feedback" style={linkStyle}>
            📝 Feedback
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <h2 style={{ textAlign: "center", color: "#333" }}>
                Welcome to your Mutual Fund Awareness App
              </h2>
            }
          />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/sip" element={<SipCalculator />} />
          <Route path="/feedback" element={<FeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
