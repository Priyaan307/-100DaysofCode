document.addEventListener('DOMContentLoaded', function (){
    //add Event listener to button
    document.getElementById('greet').addEventListener('click', function () {
        // get name from input text box
        var name = document.getElementById('name').value;
        //send name to background script
        document.getElementById('name').value ='';
    chrome.tab.query(
        {active: true, currentWindow: true}, 
      function(tabs) {
        var activeTab = tabs[0];
        // alert(activeTab.id)
        chrome.tabs.sendMessage(
            activeTab.id,
            name,
        )
     },
    )
    });
});