import "./index.css";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AllContents from "./components/Contents/AllContents";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="container">
        <AllContents />
      </div>
      <Footer />
    </>
  );
}

export default App;
