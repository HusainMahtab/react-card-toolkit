import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import '../Styles/cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-hot-toast';
function Cart() {
    const {cartItems,subTotal,shipping,tax,total}=useSelector(state=>state.cart)
    const dispatch=useDispatch();
    
    const increment=(id)=>{
      
       dispatch({
        type:'addToCart',
        payload:{id}
       })
       dispatch({
        type:'calculatePrice'
       })
       
    }
    const decrement=(id)=>{
         dispatch({
          type:'decrement',
          payload:id,
         })
         dispatch({type:"calculatePrice"})
    }
    const deleteHandler=(id)=>{
        dispatch({
          type:'deleteForCart',
          payload:{id},
        })
        toast.success("Item is Deleted Successfully");
        dispatch({type:"calculatePrice"})
    }
  return (
    <div className="cart">
        <main>
          {
            cartItems.length > 0 ? (
                cartItems.map(i=>(
                    <CartItem 
                     img={i.img}
                     name={i.name} 
                     price={i.price} 
                     qty={i.quantity}
                     id={i.id}
                     key={i.id}
                     increment={increment}
                     decrement={decrement}
                     deleteHandler={deleteHandler}

                     />
                ))
            ) : (<h1>No Items Yet</h1>)
          }
           
        </main>
        <aside>
            <h2>Subtotal:${subTotal}</h2>
            <h2>Shipping:${shipping}</h2>
            <h2>Tax:${tax}</h2>
            <h2>Total:${total}</h2>
        </aside>
    </div>
  )
}

const CartItem=({img,name,price,qty,decrement,increment,deleteHandler,id})=>{
    return(
         <div className="cartItem">
            <img src={img} alt={name}/>
            <article>
                <h3>{name}</h3>
                <p>${price}</p>
            </article>
            <div>
                <button onClick={()=>decrement(id)}>-</button>
                <p>{qty}</p>
                <button onClick={()=>increment(id)}>+</button> 
            </div>
            <AiFillDelete onClick={()=>deleteHandler(id)}/>
         </div>
    )
}

export default Cart