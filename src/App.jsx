import React from 'react'
import './Styles/app.scss'
import './Styles/mediaquery.scss'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import {Toaster} from 'react-hot-toast'
function App() {
  return (
   <Router>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='' element={''}/>
     </Routes>
     <Toaster/>
   </Router>
  )
}

export default App