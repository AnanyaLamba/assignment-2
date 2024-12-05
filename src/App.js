import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Cards from "./components/cards/cards";
import Searchbar from "./components/searchbar/searchbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Cards/>
      <Footer />
    </>
  );
}

export default App;
