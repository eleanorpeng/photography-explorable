import ReactFlipCard from "reactjs-flip-card";
import "./Card.css";
export default function Card() {
  const styles = {
    card: { background: "#e9edc9", color: "black", borderRadius: 16 },
  };

  return (
    <ReactFlipCard
      containerStyle={{ width: 300, height: 400 }}
      frontStyle={styles.card}
      backStyle={{
        ...styles.card,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      frontComponent={
        <div>
          <img
            src="ISO_400.png"
            style={{
              width: 300,
              height: 400,
              objectFit: "cover",
              borderRadius: 16,
            }}
          />
        </div>
      }
      backComponent={
        <div>
          <p>Less sensitivity and great for bright conditions</p>
        </div>
      }
    />
  );
}
