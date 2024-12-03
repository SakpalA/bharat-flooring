import './App.css';
import Footer from './components/footer/Footer';
import SofaImage from './components/sofa image/SofaImage';
import OneLine from './components/common component/one-line-text/OneLine';
import HeroSection from './components/hero section/HeroSection';
import IntroOne from './components/intro one/IntroOne';
import IntroTwo from './components/intro two/IntroTwo';
import ImageClick from './components/common component/image click/ImageClick';

function App() {
  return (
    <div className='App'>
      <HeroSection />
      <OneLine 
      textOne= 'Who we are'
      textThree= '100 years old'/>
      <IntroOne />
      <ImageClick />
      <IntroTwo />
      <OneLine 
      textOne= '4899 projects'
      textTwo= '+3 million tiles placed'
      textThree= '100 years, 7 months, 6 days, 12 hours and 13 minutes'/>
      <OneLine 
      textOne= '69 products'
      textTwo= '30 colors'
      textThree= '100 years'/>
      <OneLine 
      textOne= '6 steps'
      textTwo= '4 hours'
      textThree= 'Handmade'/>
      <SofaImage />
      <Footer />
    </div>
  );
}

export default App;
