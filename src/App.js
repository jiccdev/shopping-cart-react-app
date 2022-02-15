import { useState } from 'react';

import Layout from './components/Layout/Layout';
import NavbarTop from './components/Navbar/NavbarTop';
import Products from './components/Products/Products';
import { products } from './components/Data/Products';

const App = () => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  return (
    <Layout>
      <NavbarTop cart={cart} setCart={setCart} />
      <Products products={products} cart={cart} setCart={setCart} />
    </Layout>
  );
};

export default App;
