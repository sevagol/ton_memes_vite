import { useState } from 'react';
import reactLogo from './assets/react.svg';
import twaLogo from './assets/tapps.png';
import viteLogo from '/vite.svg';
import './App.css';
import { useSwipeable } from 'react-swipeable';
import WebApp from '@twa-dev/sdk';

const App: React.FC = () => {
  const images = [twaLogo, viteLogo, reactLogo];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    trackMouse: true
  });

  WebApp.MainButton.show();

  return (
    <div {...handlers} className="swipe-container">
      <img src={images[currentIndex]} className="logo" alt="Swipeable Logo" />
      <h1>TWA + Vite + React</h1>
    </div>
  );
}

export default App;
