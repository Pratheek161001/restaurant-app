import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartisshown,setcartissshown]=useState(false);
  const showcarthandler=()=>{
    setcartissshown(true)
  };
  const hidecarthandler=()=>{
    setcartissshown(false)
  }
  return (
    <CartProvider>
      {cartisshown&&<Cart onclose={hidecarthandler}/>}
      <Header onshowcart={showcarthandler}/>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
