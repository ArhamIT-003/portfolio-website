import "./App.scss";
import Navbar from "./Components/Navbar/navbar.jsx";
import Footer from "./Components/Footer/footer";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import Work from "./pages/Work/Work.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
