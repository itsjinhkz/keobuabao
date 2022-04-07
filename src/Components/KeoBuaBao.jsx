import React from "react";
import bgGame from "../assets/GameKeoBuaBao/bgGame.png";
import Container from "./Container";

export default function KeoBuaBao() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgGame})`,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container />
    </div>
  );
}
