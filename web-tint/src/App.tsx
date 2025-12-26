/// <reference types="chrome" />
import { useState } from 'react';
import './App.css'


function App() {
  const[colour, setCoulour] = useState('red');

  const onClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true});
    const tabId = tab?.id;
    if (tabId == null) return;
    chrome.scripting.executeScript<string[], void>({
        target: { tabId: tabId },
        args: [colour],
        func: (colour) => {
            document.body.style.backgroundColor = colour;
        }
    })
  }

  return (
    <>
      <div>
        <input type="color" value={colour} onChange={e => setCoulour(e.target.value)}></input>
        <button onClick={onClick}>Click me</button>
      </div>
    </>
  )
}

export default App
