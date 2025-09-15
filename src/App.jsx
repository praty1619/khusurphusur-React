import "./index.css";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PersonalSection from "./components/PersonalSection";
import DetailsSection from "./components/DetailsSection";
import Gallery from "./components/Gallery";
// import VideoReviews from "./components/VideoReviews";
// import Footer from "./components/Footer";

function App(){
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <PersonalSection />
      <DetailsSection />
      <Gallery />
      {/*
      <WorkshopSection/>
      <VideoReviews/>
      <Footer/> */}
    </>
  );
}

export default App;