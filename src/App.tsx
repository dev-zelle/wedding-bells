import Navbar from "./components/Navbar";
import Header from "./components/Header";
//import OurStory from "./components/OurStory";
import Couples from "./components/Couples";
import Venue from "./components/Venue";
import Attire from "./components/Attire";
import Footer from "./components/Footer";
import RSVP from "./components/RSVP";
import Entourage from "./components/Entourage";

const App = () => {
  return (
  <div className="w-full flex flex-col overflow-x-hidden">
      <Navbar />
      <Header />
      {/*<OurStory />*/}
      <Couples />
      <Entourage />
      <Venue />
      <Attire />
      <RSVP />
      <Footer />
  </div>
  );
};

export default App;