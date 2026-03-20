import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ScaleSection from "../components/sections/ScaleSection"
import Features from "../components/sections/Features"

const Landing = () => {
  return (
    <div className="landing">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* SCALE / LIGHTNING SECTION */}
      <ScaleSection />

      <Features />

    </div>
  )
}

export default Landing