import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Main = () => {
  const {products, initialCart} = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Main;
