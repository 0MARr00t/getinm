chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "set_f_TPR") {
    chrome.tabs.get(message.tabId, (tab) => {
      const url = new URL(tab.url);
      if (url.hostname === "www.linkedin.com" && url.pathname.startsWith("/jobs/search")) {
        url.searchParams.set("f_TPR", "r" + message.seconds);
        chrome.tabs.update(tab.id, { url: url.toString() });
      }
    });
  }
});
