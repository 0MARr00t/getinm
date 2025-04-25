document.getElementById("applyBtn").addEventListener("click", () => {
  const seconds = document.getElementById("timeSelect").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({
      action: "set_f_TPR",
      tabId: tabs[0].id,
      seconds: seconds
    });
  });
});
