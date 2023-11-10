document.addEventListener('DOMContentLoaded', function () {
    // Load saved note on popup open
    chrome.storage.sync.get(['note'], function (result) {
      if (result.note) {
        document.getElementById('note').value = result.note;
      }
    });
  
    // Save note on button click
    document.getElementById('save').addEventListener('click', function () {
      var note = document.getElementById('note').value;
      chrome.storage.sync.set({ 'note': note }, function () {
        // Notify that the note was saved.
        var status = document.getElementById('status');
        status.textContent = 'Note saved.';
        setTimeout(function () {
          status.textContent = '';
        }, 750);
      });
    });
  });
  