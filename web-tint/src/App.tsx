import './App.css'

function App() {

  const onClick = async () => {
    let [tab] = await chrome.tabs.query({ active: true});
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert('Hello from index.js!');
        }
    })
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
