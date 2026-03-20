import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ScaleSection from "../components/sections/ScaleSection"
import Features from "../components/sections/Features"
import Pricing from "../components/sections/Pricing"

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

      <Pricing />

    </div>
  )
}

export default Landing