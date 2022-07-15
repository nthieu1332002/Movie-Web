import { BrowserRouter } from "react-router-dom";
import Pages from './pages/Pages';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Pages/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
