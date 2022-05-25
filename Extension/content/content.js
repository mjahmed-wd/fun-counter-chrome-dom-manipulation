var elem = document.createElement('div');
elem.style.cssText = 'display:none;';
elem.id = "funCounterRoot";
document.body.prepend(elem);


const gotMessage = (message, sender, sendResponse) => {
    const content = document.getElementById("funCounterRoot");
    if (message.visibility === "toggle") {
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

}

chrome.runtime.onMessage.addListener(gotMessage);

