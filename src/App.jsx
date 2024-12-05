import './App.css';
import Footer from './components/footer/Footer';
import SofaImage from './components/sofa image/SofaImage';
import OneLine from './components/common component/one-line-text/OneLine';
import HeroSection from './components/hero section/HeroSection';
import IntroOne from './components/intro one/IntroOne';
import IntroTwo from './components/intro two/IntroTwo';
import ImageClick from './components/common component/image click/ImageClick';
import image1 from './assets/images/image1.jpeg';
import image2 from './assets/images/image2.jpeg';
import image3 from './assets/images/image3.jpeg';
import image4 from './assets/images/image4.jpeg';
import image5 from './assets/images/image5.jpeg';
import image6 from './assets/images/image6.jpeg';
import SmallTilesSec from './components/small tiles sec/SmallTilesSec';
import Workbench from './components/workbench/Workbench';
import Product from './components/product/Product';

function App() {
  return (
    <div className='App'>
      <HeroSection />
      <IntroOne />
      <ImageClick
        image1={image1}
        image2={image2}
        image3={image3} />
      <IntroTwo />
      <Workbench />
      <Product />
      <OneLine
        textOne='6 steps'
        textTwo='4 hours'
        textThree='Handmade' />
      <ImageClick
        image1={image4}
        image2={image5}
        image3={image6} />
      <SmallTilesSec />
      <SofaImage />
      <Footer />
    </div>
  );
}

export default App;
