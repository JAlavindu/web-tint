

import './App.css'

function App() {

  const onClick = () => {
    alert('clicked');
  }

  return (
    <>
      <div>
        <button onClick={onClick}>Click me</button>
      </div>
    </>
  )
}

export default App
