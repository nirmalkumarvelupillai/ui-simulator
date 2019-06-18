chrome.runtime.onInstalled.addListener(function() {
  /**
   * lets add a default domain
   * for our options page
  */
  chrome.storage.sync.set(
    {
        config: [
            {
                domain: 'docker',
                color: '#2496ed',
            },
        ],
    },
    null
  );
});