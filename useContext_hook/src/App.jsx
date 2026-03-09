import React, { useState } from 'react'
import ChildA from './conponents/ChildA';

  // step 1: you have to crea the context 
  const UserContext = craeteContext();
  // step 2:wrap all the child inside a provider
  // step 3:pass value
  //step 4:consumer ke nandar jake consume kar lo 


const App = () => {
const [user,setUser] = useState({name:"Sachin_diwakar"});

  return (
    <>
    // here wre will wrap the child jiske andar bhi apko consume karana hai agge ajake 
    <UserContext.Provider value ={user}>
         <ChildA/>
    </UserContext.Provider>
    </>
  )
}

export default App
export  {UserContext}