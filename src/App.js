
import Home from "./pages/Home";
import "./css/own.css"
import About from "./pages/About";
import "./App2.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HeroSlider from "./component/HeroSlider";
import PopularMenu from "./component/papularMenu/PopularMenu";
import ChooseUs from "./component/ChooseUs/ChooseUs";
import MenuPack from "./component/MenuPack/MenuPack";
import Testimonial from "./component/Testimonial/Testimonial";

function App() {
  return (
   <div>
    <Header/>
    <HeroSlider/>
    <Home/>
    <PopularMenu/>
    <ChooseUs/>
    <MenuPack/>
    {/* <Testimonial /> */}
    <About/>
    <Footer/>
   </div>
  );
}

export default App;
