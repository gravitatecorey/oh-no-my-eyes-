// var toggle = false;
// chrome.browserAction.onClicked.addListener(function(tab) {
//   toggle = !toggle;
//   if(toggle){
//     chrome.browserAction.setIcon({path: "on.png", tabId:tab.id});
//     chrome.tabs.executeScript(tab.id, {file:"styles.css"});
//   }
//   else{
//     chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
//     chrome.tabs.executeScript(tab.id, {code:"alert()"});
//   }
// });

var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  chrome.browserAction.setIcon({ path: 'on.png' });
  chrome.browserAction.setBadgeText({ text: 'OFF' });
  chrome.tabs.executeScript(null, { file: 'styles.css' }); 
 }else{
  //turn off...
  chrome.browserAction.setIcon({ path: 'off.png'});
  chrome.browserAction.setBadgeText({ text: '' });
 }
});