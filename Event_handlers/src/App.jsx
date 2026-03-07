import React from 'react'

const App = () => {

  function clickfunc() {
    alert ("i am clicked");
  }

  function mousekafunction(){
  alert("mouse pe se hata cursor")
  }

  return (
    <>
      <div>
        <p onMouseOver={mousekafunction}> im a apara </p>
        <button onClick={clickfunc}>
          click me!!
        </button>
        </div> 
    </>
  )
}

export default App