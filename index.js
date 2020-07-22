let sciHubDomainList =
[
  "sci-hub.is",
  "sci-hub.tw",
  "sci-hub.se",
  "sci-hub.win",
  "sci-hub.bz",
  "sci-hub.cc",
  "sci-hub.io",
  "scihub22266oqcxt.onion"
];
if ( Array.isArray(localStorage.getItem("sciHubDomainList" )) === false )
{
  localStorage.setItem("sciHubDomainList", JSON.stringify(sciHubDomainList));
  localStorage.setItem("sciHubDomain",     sciHubDomainList[0]);
}

chrome.contextMenus.create({
  id: "SciHub",
  title: "Open Link on SciHub…",
  type: "normal",
  contexts:
  [
    "link",
    "selection"
  ]
});

chrome.contextMenus.onClicked.addListener
(
  function(info, tab)
  {
    let sciHubDomainList = JSON.parse(localStorage.getItem("sciHubDomainList"));
    let sciHubDomain     = localStorage.getItem("sciHubDomain");
    if (info.menuItemId === "SciHub") {
      let sciurl;
      if ( info.selectionText !== undefined )
      {
        sciurl = info.selectionText;
      }
      else if ( info.linkUrl !== undefined )
      {
        sciurl = info.linkUrl;
      }
      else if ( info.pageUrl !== undefined )
      {
        sciurl = info.pageUrl;
      }
      if ( sciurl !== undefined )
      {
        sciurl = "http://" + sciHubDomain + "/" + sciurl;
        chrome.tabs.create
        (
          {
            url: sciurl
          }
        );
      }
    }
  }
);
