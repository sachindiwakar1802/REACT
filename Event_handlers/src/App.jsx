import React from 'react'

const App = () => {

  function activateLasers(){
    alert("Lasers Activated!")
  }

  function handleSubmit(){
    console.log("You clicked submit.")
    return false
  }

  return (
    <div>
      App

      <button onClick={activateLasers}>
        Activate Lasers
      </button>

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App