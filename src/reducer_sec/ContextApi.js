import React, { createContext, useState } from 'react'

export const context = createContext()

const ContextApi = ({children}) => {
    const [cart,setCart]=useState([]);
    const [user,setUser]=useState([]);
    const [database,setDataBase]= useState([])
    const [logedin,setLogedin]= useState([])

    const [showChatBox,setShowChatBox]=useState([])

  return (
    <context.Provider value={{cart,setCart,user,setUser,database,setDataBase,logedin,setLogedin,showChatBox,setShowChatBox}}>{children}</context.Provider>
  )
}

export default ContextApi