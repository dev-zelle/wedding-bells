import Header from "./components/Header";
import OurStory from "./components/OurStory";
import Couples from "./components/Couples";

const App = () => {
  return (
  <div className="w-full flex flex-col">
    <Header />
    <OurStory />
    <Couples />
  </div>
  )
};

export default App;