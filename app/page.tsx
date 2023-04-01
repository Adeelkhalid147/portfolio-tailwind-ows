import About from "./Component/About";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import HomeHero from "./Component/HomeHero";
import Portfolio from "./Component/Portfolio";
import Skills from "./Component/Skills";
import Socialicons from "./Component/Socialicons"

export default function Home() {
  return (<>
  <Socialicons/>
    <Header/>
    <HomeHero/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>

  </>
  );
}
