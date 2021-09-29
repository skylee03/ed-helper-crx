function flipButtons() {
	let es = document.getElementsByTagName("button");
	for(let i = 0; i < es.length; i++) {
		if(es[i].classList.contains("snip-tb-btn")) {
			es[i].style.display = es[i].style.display == "" ? "none" : "";
		}
	}
}

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: flipButtons
	});
});