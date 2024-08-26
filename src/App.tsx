import Navbar from "./components/Navbar";
import Header from "./components/Header";
//import OurStory from "./components/OurStory";
import Couples from "./components/Couples";
import Footer from "./components/Footer";

const App = () => {
  return (
  <div className="w-full flex flex-col">
    <div id="#home">
      <Navbar />
      <Header />
    </div>
    {/*<OurStory />*/}
    <section id="#couple">
      <Couples />
    </section>
    <Footer />
  </div>
  )
};

export default App;