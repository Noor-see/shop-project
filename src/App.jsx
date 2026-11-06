import { useEffect, useState } from 'react';
import toast,{Toaster} from 'react-hot-toast';
import './App.css'
import Products from './Components/Products';
import Carts from './Components/Carts';
const dumydata = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    rate: 4.8,
    price: 1200,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24",
    rate: 4.6,
    price: 1100,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c",
  },
  {
    id: 3,
    title: "Nike Air Max",
    rate: 4.5,
    price: 180,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    title: "HP Pavilion Laptop",
    rate: 4.3,
    price: 850,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 5,
    title: "Coffee Maker",
    rate: 4.2,
    price: 95,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    id: 6,
    title: "Sony WH-1000XM5 Headphones",
    rate: 4.9,
    price: 399,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215",
  },
  {
    id: 7,
    title: "Apple Watch Series 9",
    rate: 4.7,
    price: 450,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    id: 8,
    title: "Adidas Hoodie",
    rate: 4.4,
    price: 75,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 9,
    title: "Gaming Mouse RGB",
    rate: 4.6,
    price: 60,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 10,
    title: "Mechanical Keyboard",
    rate: 4.7,
    price: 140,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 11,
    title: "Backpack Travel",
    rate: 4.3,
    price: 55,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 12,
    title: "Smart TV 55 inch",
    rate: 4.5,
    price: 700,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
  },

];

function App() {
  const [Product, setProduct] = useState([])
  const [Loding,setLoding] = useState(false)
  useEffect(()=>{
    const getData = async () => {
      setLoding(true);
      setProduct(dumydata);
      setLoding(false);
    }
    getData();

  },[])
  return (
    <>
      <h1 className='logo'>SHOPING CART <span className='span1'/><span className='span2'/></h1>

      <Toaster/>

      {Loding&&<p>Loding...</p>}
      {!Loding&&Product&&<Products products={Product}/>}


      <Carts/>
    </>
  )
}

export default App
