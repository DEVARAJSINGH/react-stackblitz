import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MobileUI from './Components/MobileUI/MobileUI';
import TabletUI from './Components/TabletUI/TabletUI';
import LaptopUI from './Components/LaptopUI/LaptopUI';

import './style.css';

export default function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  return (
    <div>

<h1>React Responsive - a guide</h1>      
{isMobileDevice && <MobileUI />}
  {isTabletDevice && <>
  <TabletUI />
  {isLaptop && <LaptopUI />}
</>}
      
    </div>
  );
}
