import "./index.css";
import FabNavbar from "./components/FabNavbar";
import Hero from "./components/Hero";
import PersonalSection from "./components/PersonalSection";
import DetailsSection from "./components/DetailsSection";
import Gallery from "./components/Gallery";
import VideoReviews from "./components/VideoReviews";
import Footer from "./components/Footer";

function App(){
  return (
    <>
      <FabNavbar/>
      <Hero/>
      <PersonalSection />
      <DetailsSection />
      <Gallery />
      <VideoReviews />
      <Footer />
      {/*
     */}
    </>
  );
}

export default App;