import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router'

function Header() {
  return <h1>Hello World!</h1>
}

function Miming() {
    const [url, setUrl] = useState()
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then((res) => res.json())
        .then(data => setUrl(data[0].url))
    }, [toggle])

    console.log(url)

    function toggleFunction() {
      setToggle(prev => !prev)
    }

    return (
      <>
        <img src={url} />
        <br />
        <button onClick={toggleFunction}>new kitty</button>
      </>
    )
}

function App() {
  return (
  <BrowserRouter>
      <br />
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/miming' element={<Miming />} />
    </Routes>
    < br />
    <Link to="/">Hello World!</Link>
      <Link to='/miming'>Miming</Link>
  </BrowserRouter>
  )
}

export default App
