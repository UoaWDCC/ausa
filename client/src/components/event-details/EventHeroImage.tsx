'use client';

import React, { useState } from "react";

type EventHeroImageProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

export default function EventHeroImage({ imageUrl, title, subtitle }: EventHeroImageProps) {
  const [localImage, setLocalImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setLocalImage(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${localImage || imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "0 2px 8px rgba(0,0,0,0.8)",
        position: "relative",
        border: "2px solid white", // <-- Added border
        borderRadius: "12px",      // Optional: rounded corners
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>{title}</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>{subtitle}</p>
      <label
        htmlFor="hero-image-upload"
        style={{
          marginTop: "1rem",
          background: "rgba(0,0,0,0.5)",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem"
        }}
      >
        + Add Image/Banner
        <input
          id="hero-image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </label>
    </section>
  );
}
