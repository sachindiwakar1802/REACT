import React, { useContext } from 'react'
import { UserContext } from '../App'
const ChildC = () => {
  const user = useContext(UserContext)
  return (
    
    <div>ChildC
      teh dat is : {user.name}
    </div>
  )
} 

export default ChildC