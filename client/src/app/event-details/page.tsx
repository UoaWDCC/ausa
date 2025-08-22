"use client";

import React, { useState } from "react";
import EventHeroImage from "@/components/event-details/EventHeroImage";
import EventInfoCard from "@/components/event-details/EventInfoCard";
import EventAboutSection from "@/components/event-details/EventAboutSection";

export default function Page() {
  // State for input fields
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutDescription, setAboutDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // State for showing components vs input forms
  const [submitted, setSubmitted] = useState(false);

  return (
    <main
      style={{
        background: "#313338",
        minHeight: "120vh",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Hero Image */}
      <EventHeroImage
        imageUrl="https://picsum.photos/1200/400?blur=2"
        title="Scalping Pokemon TCG"
        subtitle="By Ajith Curry Muncher"
      />

      {/* Main content layout */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          padding: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* About section OR form */}
        <div style={{ flex: "2 1 600px" }}>
          {!submitted ? (
            <section
              style={{
                background: "#1e1f22",
                padding: "1.5rem",
                borderRadius: "12px",
                marginTop: "1rem",
                minHeight: "220px", // smaller height
              }}
            >
              <h2 style={{ marginBottom: "1rem" }}>Enter About Section</h2>
              <input
                type="text"
                placeholder="Enter title"
                value={aboutTitle}
                onChange={(e) => setAboutTitle(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  background: "transparent",
                  color: "white",
                }}
              />
              <textarea
                placeholder="Enter description"
                value={aboutDescription}
                onChange={(e) => setAboutDescription(e.target.value)}
                style={{
                  width: "100%",
                  minHeight: "100px",
                  padding: "0.7rem",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  background: "transparent",
                  color: "white",
                  resize: "vertical",
                }}
              />
            </section>
          ) : (
            <EventAboutSection
              title={aboutTitle}
              description={aboutDescription}
            />
          )}
        </div>

        {/* Info section OR form */}
        <div style={{ flex: "1 1 250px" }}>
          {!submitted ? (
            <aside
              style={{
                background: "#2b2d31",
                padding: "1.2rem",
                borderRadius: "12px",
                minHeight: "220px", // same height as about
              }}
            >
              <h2 style={{ marginBottom: "1rem" }}>Enter Event Info</h2>
              <input
                type="text"
                placeholder="Enter date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  marginBottom: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  background: "transparent",
                  color: "white",
                }}
              />
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  marginBottom: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  background: "transparent",
                  color: "white",
                }}
              />
              <input
                type="text"
                placeholder="Start time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  marginBottom: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  background: "transparent",
                  color: "white",
                }}
              />
              <input
                type="text"
                placeholder="End time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.7rem",
                  marginBottom: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #555",
                  background: "transparent",
                  color: "white",
                }}
              />
            </aside>
          ) : (
            <EventInfoCard
              date={date}
              location={location}
              startTime={startTime}
              endTime={endTime}
            />
          )}
        </div>
      </div>

      {/* Add button */}
      {!submitted && (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <button
            onClick={() => setSubmitted(true)}
            style={{
              padding: "1rem 2rem",
              background: "#5865f2",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Add
          </button>
        </div>
      )}
    </main>
  );
}
