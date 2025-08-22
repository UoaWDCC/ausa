import React from "react";

type EventAboutSectionProps = {
  title: string;
  description: string;
};

export default function EventAboutSection({ title, description }: EventAboutSectionProps) {
  return (
    <section
      style={{
        background: "#1e1f22",
        color: "white",
        padding: "2rem",
        borderRadius: "12px",
        marginTop: "2rem",
        lineHeight: "1.6",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{title}</h2>
      <p style={{ opacity: 0.9 }}>{description}</p>
    </section>
  );
}
