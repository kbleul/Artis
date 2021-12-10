
import React from "react";
import ReactDOM from "react-dom";
import Mobilefrontpage from "./frontpage_mobile_version";
import Tabfrontpage from "./frontpage_tablet_version";
import Desktopfrontpage from "./frontpage_desktop_version";
import './css/App.css';
import { useMediaQuery } from 'react-responsive';

export default function App() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 481px) and ( max-device-width: 768px)",
  });

  const isDesktopDevice = useMediaQuery({
    query: "(min-device-width: 769px ) and (max-device-width: 1200px)",
  })
  


    return (<article>
      {isMobileDevice && <Mobilefrontpage /> }
      {isTabletDevice && <Tabfrontpage />}
      {isDesktopDevice && <Desktopfrontpage />}

      </article>)
}





ReactDOM.render(<App />, document.getElementById("root"));
