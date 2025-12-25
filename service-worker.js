//using chrome api

// Listen for the extension icon being clicked
chrome.action.onClicked.addListener(tab => {
    // Execute a script in the current tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert('Extension icon clicked!');
        }
    })
})