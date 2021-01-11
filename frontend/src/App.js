import logo from './logo.svg';
import './App.css';

function App() {
  const openManu=()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openManu}>
               &#9776;
            </button>
            <a href="index.html">Amazona</a>
        </div>
        <div className="header-links"> 
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a> 
        </div>    
    </header>

    <aside className="sidebar">
        <h3>Shopping Catagories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
            <li>
                <a href="index.html">Pants</a>
            </li>

            <li>
                <a href="index.html">Shirts</a>
            </li>
        </ul>
    </aside>

    <main className="main">
        <div className="content">
            <ul className="products">
                <li>
                    <div className="product">
                      <img className="product-image" src="/images/d1.jpg" alt="Product 1"/>
                      <div className="product-name"> <a href="product.html"> Slim Shirt </a> </div>
                      <div className="product-brand"> Lacosta </div>
                      <div className="product-price"> $60 </div>
                      <div className="product-rating"> 4.5 stars(10 Reviews) </div>
                    </div> 
                </li>
            </ul>
        </div>
    </main>

    <footer className="footer">
        Alright reservered
    </footer>

    </div>
  );
}

export default App;
