import { useState } from "react";

function SipCalculator() {
  const [monthly, setMonthly] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);

  const calculateSIP = () => {
    const r = 0.12 / 12;
    const n = years * 12;
    const futureValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setResult(futureValue.toFixed(2));
  };

  return (
    <div>
      <h2 style={{ color: "#0047AB" }}>💰 SIP Calculator</h2>
      <input
        type="number"
        placeholder="Monthly Investment ₹"
        value={monthly}
        onChange={(e) => setMonthly(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Investment Duration (Years)"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={calculateSIP}>
        Calculate
      </button>
      {result && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Estimated Returns: ₹ {result}
        </p>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#0047AB",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default SipCalculator;
