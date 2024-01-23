import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import Form from './components/form/Form'
import Navbar from './components/navbar/Navbar'

function App() {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([]);
  const [mode, setMode] = useState(false)
  const [typeThing, setTypeThing] = useState(["men's clothing"])
  const [added, setAdded] = useState(true)
  const [cart1, setCart1] = useState([])
  const [liked, setLiked] = useState(true)


  const getData = async (api) => {
    const req = await fetch(api);
    const data = await req.json();
    setData(data)
  }

  useEffect(() => {
    getData(`https://fakestoreapi.com/products/category/${typeThing}`);
  }, [typeThing])

  return (
    <div className={mode ? "body" : "body active"}>
      <Navbar liked={liked} setLiked={setLiked} added={added} setAdded={setAdded} cart={cart} mode={mode} setMode={setMode} setCart={setCart} cart1={cart1}  setCart1={setCart1} />
      <Form getData={getData} typeThing={typeThing} setTypeThing={setTypeThing} />
      <Cards cart1={cart1}  setCart1={setCart1}  cart={cart} setCart={setCart} data={data} />
    </div>
  );
}

export default App
