import { useState } from "react";
import "./index.css";
import FabNavbar from "./components/FabNavbar";
import Hero from "./components/Hero";
import PersonalSection from "./components/PersonalSection";
import DetailsSection from "./components/DetailsSection";
import Gallery from "./components/Gallery";
import VideoReviews from "./components/VideoReviews";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "about":
        return <PersonalSection />;
      case "details":
        return <DetailsSection />;
      case "gallery":
        return <Gallery />;
      case "video":
        return <VideoReviews />;
      case "contact":
        return <Footer />;
      default:
        return <Hero />;
    }
  };

  return (
    <>
      <FabNavbar setPage={setPage} />
      <main>{renderPage()}</main>
    </>
  );
}

export default App;
