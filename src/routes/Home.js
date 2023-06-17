import Distination from "../components/Distination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rd-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fgVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Distination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
