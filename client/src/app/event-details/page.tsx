import React from "react";
import EventHeroImage from '@/components/event-details/EventHeroImage';
import EventInfoCard from '@/components/event-details/EventInfoCard';
import EventAboutSection from '@/components/event-details/EventAboutSection';


export default function Page() {
  return (
    <main style={{ background: "#313338", minHeight: "100vh", color: "white", fontFamily: "sans-serif" }}>
      {/* Hero Image */}
      <EventHeroImage
        imageUrl="https://picsum.photos/1200/400?blur=2"
        title="Design Driven NYC #14"
        subtitle="By Jonathan Doe"
      />

      {/* Main content layout */}
      <div style={{ display: "flex", gap: "2rem", padding: "2rem", flexWrap: "wrap" }}>
        {/* About section */}
        <div style={{ flex: "2 1 600px" }}>
          <EventAboutSection
            title="About Design Driven NYC #14"
            description="The idea behind this show is to provide a platform to the denim industry in this region where the entire supply chain players from mills, fiber and chemical suppliers, garment manufacturers, retailers, buying houses, brands etc could get together and help in further development of the denim industry here."
          />
        </div>

        {/* Info card */}
        <div style={{ flex: "1 1 250px" }}>
          <EventInfoCard
            date="Wednesday, March 2, 2016"
            location="Radisson Blu Water Garden Hotel, Dhaka"
            startTime="10:00 AM"
            endTime="05:00 PM"
          />
        </div>
      </div>
    </main>
  );
}