import React, {createContext ,useEffect, useState} from 'react'
export const shoppingCartContxt = createContext({})


  const CartItemsLocal=localStorage.getItem("CartsItem")
  ?JSON.parse(localStorage.getItem("CartsItem")):[];

const ShppingCartContextProvider = ({children}) => {
  const [CartsItem,setCartContext] = useState(CartItemsLocal)
  useEffect(()=>{
    localStorage.setItem("CartsItem",JSON.stringify(CartsItem))
  },[CartsItem])

  return (
    <div>
      <shoppingCartContxt.Provider value={{CartsItem,setCartContext}}>
        {children}
      </shoppingCartContxt.Provider>
    </div>
  )
}

export default ShppingCartContextProvider
