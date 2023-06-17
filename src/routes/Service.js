import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import night from "../assets/night.jpg";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="Service" btnClass="hide" />
      <Footer />
    </>
  );
}

export default Service;
