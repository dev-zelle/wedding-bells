import Navbar from "./components/Navbar";
import Header from "./components/Header";
//import OurStory from "./components/OurStory";
import Couples from "./components/Couples";
import Footer from "./components/Footer";
import Venue from "./components/Venue";

const App = () => {
  return (
  <div className="w-full flex flex-col">
    <Navbar />
    <Header />
    {/*<OurStory />*/}
    <Couples />
    <Venue />
    <Footer />
  </div>
  )
};

export default App;