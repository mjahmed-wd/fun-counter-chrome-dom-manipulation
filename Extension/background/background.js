const buttonClicked = (tab) => {
    let msg = {
        visibility: "toggle"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

chrome.action.onClicked.addListener(buttonClicked);