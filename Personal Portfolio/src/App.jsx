import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
    </div>
  );
};

export default App;
