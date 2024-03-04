import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Promo from "./components/promo/Promo";
import SliderSnowbord from "./components/sliderSnowbord/SliderSnowbord";

import './styles/reset.css'
import './styles/common.css'


function App() {
  return (
    <>
      <Header />
      <Slider />
      <Promo />
      <SliderSnowbord />
    </>
  );
}

export default App;
