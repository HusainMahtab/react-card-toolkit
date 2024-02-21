import React from 'react'
import "../Styles/home.scss"
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const img1="https://cdn.pixabay.com/photo/2017/08/20/10/39/leather-shoes-2661249_1280.jpg"
const img2='https://cdn.pixabay.com/photo/2017/04/04/04/25/technology-2200260_640.jpg'
const img3='https://cdn.pixabay.com/photo/2017/08/16/07/36/software-2646725_1280.png'
const img4='https://cdn.pixabay.com/photo/2017/08/16/08/19/blogs-marketing-2646804_640.png'
function Home() {

 const projectList=[
  {
  name:"Black Shoose",
  price:120,
  id:"shahfhsalkhkfdhka",
  img:img1
 },
 {
  name:"Laptop",
  price:520,
  id:"shahfhsalkhkfdhlhkhka",
  img:img2
 },
 {
  name:"WordPress Book",
  price:56,
  id:"shsffdsahfhsalkhkfdhka",
  img:img3
 },
 {
  name:"Marketing Book",
  price:72,
  id:"shahfhsalkhkjljfdhka",
  img:img4
 },
] 

const dispatch=useDispatch();
const addTocartHandler=(options)=>{
   console.log(options);
   dispatch({type:"addToCart",payload:options})
   toast.success("Added To Cart")
   dispatch({type:"calculatePrice"})

}




  return (
    <div className='home'>
      {
        projectList.map((i)=>(
          <ProductCard key={i.id} name={i.name} price={i.price} img={i.img} id={i.id} handler={addTocartHandler}/>

        ))
      }
    </div>
  )
}

const ProductCard=({name,id,price,handler,img,})=>{
  return(
     <div className='productCard'>
          <img src={img} alt={name}/>
          <p className="">{name}</p>
          <h4 className="">${price}</h4>
          <button className="" onClick={()=>handler({name,price,id,quantity:1,img})}>Add to Cart</button>
     </div>
  )
}

export default Home