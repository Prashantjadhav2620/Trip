import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import night from "../assets/10.jpg";
import Singup from "../components/signup";

function singup() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={night} title="Sign Us " btnClass="hide" />
      <Singup />
    </>
  );
}

export default singup;
