import React from 'react'
import useEffect from 'react'

const App = () => {

useEffect(() => {
//  runs on every render 
  first
// for clean up function 
  return () => {
    second
  }
  // runs deped inthe dependecieiy 
}, [third])

  return (
    <div>App</div>
  )
}

export default App