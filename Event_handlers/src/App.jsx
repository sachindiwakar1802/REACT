import React from 'react'

const App = () => {

  function clickfunc() {
    alert("i am clicked");
  }

  function mousekafunction(){
    alert("mouse pe se hata cursor")
  }

  // form ka function
  function formkafunction(e){
    console.log( e.target.value)
  }

  return (
    <>
      <div>
        <p onMouseOver={mousekafunction}> im a para </p>

        <button onClick={clickfunc}>
          click me!!
        </button>

        {/* creating form */}
        <form>
          <input type="text" onChange={formkafunction} />
        </form>

      </div>
    </>
  )
}

export default App