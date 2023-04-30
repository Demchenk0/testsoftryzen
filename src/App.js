import { useEffect } from 'react';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Cases from './components/cases/Cases';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';
function App() {
  useEffect(() => {
		import("lightbox2/dist/js/lightbox.min.js").then((Lightbox) => {
			import("lightbox2/dist/css/lightbox.min.css");
		});
	}, []);
	return (
		<>
			<Navbar />
			<main>
      <Hero />
      <About/>
      <Cases/>
      <Blog/>
      <Team/>
      <Form/>
      </main>
      <Footer/>
		</>
	);
}

export default App;
