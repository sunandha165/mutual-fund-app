import { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [form, setForm] = useState({ name: "", message: "" });

  const submit = async () => {
    await axios.post("http://localhost:5000/feedback", form);
    alert("Thanks for your feedback!");
    setForm({ name: "", message: "" });
  };

  return (
    <div>
      <h2 style={{ color: "#0047AB" }}>📝 Feedback</h2>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Your Name"
        style={inputStyle}
      />
      <textarea
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Your Message"
        rows="4"
        style={inputStyle}
      />
      <button style={buttonStyle} onClick={submit}>
        Submit
      </button>
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

export default FeedbackForm;
