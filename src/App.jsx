import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative overflow-hidden">
      
      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-400 opacity-20 blur-[120px] transition-transform duration-75"
        style={{
          transform: `translate(${mouse.x - 200}px, ${mouse.y - 200}px)`
        }}
      />

      {/* Gradient */}
      <img
        src="/gradient.png"
        alt=""
        className="absolute top-0 right-0 opacity-60 -z-10"
      />

      {/* Blur effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg]" />

      <Header />
      <Hero />
    </main>
  )
}

export default App;
