function LearnPage() {
  const playAudio = () => {
    const audio = new Audio("/audio/intro-telugu.mp3");
    audio.play();
  };

  return (
    <div>
      <h2 style={{ color: "#0047AB" }}>📚 Learn About Mutual Funds</h2>
      <p>
        A mutual fund is an investment scheme where money is pooled from many
        people and invested in stocks, bonds, or other assets. It is managed by
        professionals and ideal for beginners.
      </p>
      <button style={buttonStyle} onClick={playAudio}>
        🔊 Play in Telugu
      </button>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#0047AB",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "10px",
};

export default LearnPage;
