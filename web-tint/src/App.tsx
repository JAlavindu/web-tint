/// <reference types="chrome" />
import './App.css'


function App() {

  const onClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true});
    const tabId = tab?.id;
    if (tabId == null) return;
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => {
            alert('Hello from index.js!');
        }
    })
  }

  // const onClick = async () => {
  //   const tabs = await new Promise<chrome.tabs.Tab[]>((resolve) =>
  //     chrome.tabs.query({ active: true }, (tabs) => resolve(tabs))
  //   )
  //   const tab = tabs[0]
  //   if (!tab?.id) return

  //   chrome.scripting.executeScript({
  //       target: { tabId: tab.id },
  //       func: () => {
  //           alert('Hello from index.js!');
  //       }
  //   })
  // }

  return (
    <>
      <div>
        <button onClick={onClick}>Click me</button>
      </div>
    </>
  )
}

export default App
