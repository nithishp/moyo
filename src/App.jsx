import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
const App = () => {
  return <div>
    <section id='Homepage'><Navbar/><Hero/></section>
    <section><Parallax/></section>
    <section>Services</section>
    <section><Parallax/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section>Contact</section>
  </div>;
};

export default App;
