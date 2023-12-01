import Footer from "./components/footer/footer.jsx"
import Navbar from "./components/navbar/index.jsx"
import Giff from "./pages/home/giff.jsx"
import Hakkimizda from "./pages/home/hakkimizda.jsx"
import Iletisim from "./pages/home/iletişim.jsx"
import HomePage from "./pages/home"
import './App.css';


function App() {
  
  return (
    <div className="App" >
      <Navbar/>
      <Giff/>
      <HomePage/>
      <Hakkimizda/>
      <Iletisim/>
      <Footer/>
    </div>
  );
}

export default App;
