import React from "react";

type EventHeroImageProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

export default function EventHeroImage({ imageUrl, title, subtitle }: EventHeroImageProps) {
  return (
    <section
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0 2px 8px rgba(0,0,0,0.8)"
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>{subtitle}</p>
    </section>
  );
}
