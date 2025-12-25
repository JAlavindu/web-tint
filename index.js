async function sayHello(){
    // Get the active tab
    let [tab] = await chrome.tabs.query({ active: true});
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert('Hello from index.js!');
        }
    })
}

document.getElementById('myButton').addEventListener('click', sayHello);