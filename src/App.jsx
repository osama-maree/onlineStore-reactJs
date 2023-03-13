
import './App.scss';
import Navbar from './Component/navbar/Navbar';
import MainPage from './Component/mainPage/MainPage';
import Product from './Component/product/Product';
import Creams from './Component/creams/Creams';
import Footer from './Component/footer/Footer';
import Tag from './Component/whatsAppTag/Tag';
import Buy from './Component/buy/Buy';
function App() {
  return (
    <div className="App">

     <Navbar/>    
     <Tag/> 
     <Buy/>   
        <div className="sections">      
              <MainPage/>
              <Product/>
              <Creams/>
              <Footer/>
        </div>
    </div>

  );
}

export default App;

