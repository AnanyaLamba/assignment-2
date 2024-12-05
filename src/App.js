import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Cards from "./components/cards/cards";
import Searchbar from "./components/searchbar/searchbar";
import { JobContextProvider } from "./components/context/jobcontext";
import "./App.css";

function App() {
  return (
    <JobContextProvider>
      <Navbar />
      <Searchbar />
      <Cards/>
      <Footer />
    </JobContextProvider>
  );
}

export default App;
