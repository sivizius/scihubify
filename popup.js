let popup = document.getElementById("popup-content");
let sciHubDomainList = JSON.parse(localStorage.getItem("sciHubDomainList"));
sciHubDomainList.forEach
(
  function(value)
  {
    let theDiv = document.createElement("DIV");
    theDiv.appendChild(document.createTextNode(value));
    theDiv.className = "button";
    popup.appendChild(theDiv);
  }
);


let classname = document.getElementsByClassName("button");
for (let i = 0; i < classname.length; i++)
{
  classname[i].addEventListener
  (
    "click",
    (event) =>
    {
      localStorage.setItem("sciHubDomain", event.target.textContent);
      window.close();
    }
  );
}

document.getElementById("new-scihub").addEventListener
(
  "keyup",
  (event) =>
  {
    if (event.keyCode == 13)
    {
      let theDiv = document.createElement("DIV");
      theDiv.appendChild(document.createTextNode(event.target.value));
      theDiv.className = "button";
      popup.appendChild(theDiv);
      sciHubDomainList.push(event.target.value);
      localStorage.setItem("sciHubDomainList", JSON.stringify(sciHubDomainList) );
      event.target.value = "";
    }
  }
);
