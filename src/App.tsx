import Navbar from "./components/Navbar";
import Header from "./components/Header";
//import OurStory from "./components/OurStory";
import Couples from "./components/Couples";
import Venue from "./components/Venue";
import Attire from "./components/Attire";
import Footer from "./components/Footer";

const App = () => {
  return (
  <div className="w-full flex flex-col">
    <Navbar />
    <Header />
    {/*<OurStory />*/}
    <Couples />
    <Venue />
    <Attire />
    <Footer />
  </div>
  )
};

export default App;