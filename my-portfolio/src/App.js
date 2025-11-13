import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatIDo from './components/WhatIDo';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import './styles/portfolio.css'
function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <WhatIDo/>
      <Portfolio/>
      <Resume/>
    </div>
  );
}

export default App;
