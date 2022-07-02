import Navbar from "./components/Navbar";
import Prediction from "./pages/Prediction";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  let Component;
  // console.log(window.location);
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/prediction":
      Component = Prediction;
      break;
    case "/about":
      Component = About;
      break;
    case "/contact":
      Component = ContactUs;
      break;
    default:
      break;
  }
  return (
    <div className="App">
      <>
        <Navbar />
        <div className="container">
          <Component />
        </div>
      </>
    </div>
  );
}

export default App;
