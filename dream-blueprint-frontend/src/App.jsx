import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBar from "./components/FeaturesBar";
import HowItWorks from "./components/HowItWorks";
import Dashboard from "./components/Dashboard";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div data-theme={dark ? "dark" : "light"} style={{
      minHeight: "100vh",
      background: dark
        ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
        : "linear-gradient(160deg, #e0f2fe 0%, #f0fdf4 50%, #faf5ff 100%)",
    }}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <FeaturesBar />

      <section style={{
        padding: "0 48px 80px",
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 40,
        alignItems: "start",
      }}>
        <HowItWorks />
        <Dashboard dark={dark} />
      </section>

      <Stats />
      <Footer dark={dark} />
    </div>
  );
}