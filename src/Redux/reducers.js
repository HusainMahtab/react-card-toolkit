

import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
 
   (builder)=>{
     builder
     .addCase("addToCart",(state,action)=>{
        const item=action.payload;
        // console.log({item},state.cartItems)
        const isItemsExist=state.cartItems.find((it)=>it.id===item.id);
        // console.log(isItemsExist);
        if(isItemsExist){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id){
                   i.quantity+=1;  
                }     
            })
        }else{
            state.cartItems.push(item);
        }
     })
     .addCase("decrement",(state,action)=>{
        const item=state.cartItems.find((i)=>i.id===action.payload);
        if(item.quantity > 1){
            state.cartItems.forEach((i)=>{
                if(i.id===item.id){
                    i.quantity-=1;
                }
            })
        }
     })
     .addCase("deleteForCart",(state,action)=>{
        console.log(state.cartItems, action)
       state.cartItems=state.cartItems.filter((i)=>i.id!==action.payload.id);
     })
     .addCase("calculatePrice",(state)=>{
        let sum=0;
        state.cartItems.forEach((e)=>(sum+=e.price*e.quantity));
        state.subTotal=sum;
        state.shipping=state.subTotal > 1000 ? 0 : 5;
        state.tax=+(state.subTotal*0.18).toFixed();
        state.total=state.subTotal+state.shipping+state.tax ;

     })
   }
    
  
);

