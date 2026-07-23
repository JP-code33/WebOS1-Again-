
dragElement(document.getElementById("Welcome"));


function dragElement(element) {
  
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  
  if (document.getElementById(element.id + "welcomeheader")) {
   
    document.getElementById(element.id + "welcomeheader").onmousedown = startDragging;
  } else {
    
    element.onmousedown = startDragging;
  }

  
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    
    initialX = e.clientX;
    initialY = e.clientY;
    
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }


  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
  
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
   
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }


  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var welcomeScreenClose = document.querySelector("#welcomeclose")
var welcomeScreenOpen = document.querySelector("#welcomeopen")
var welcomeScreen = document.querySelector("#Welcome")


function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "block"
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var browserDiv = document.querySelector("#browserDiv");
var letsOpenBrowser = document.querySelector("#letsOpenBrowser");
var closeBrowserDiv = document.querySelector("#closeBrowserDiv");
var intUrl = document.querySelector("#intUrl");
var Go = document.querySelector("#Go")

function windowOpen(element) {
  element.style.display = "block";
}

function windowClose(element) {
  element.style.display = "none";
}

letsOpenBrowser.addEventListener("click", function() {
  windowOpen(browserDiv);
});

closeBrowserDiv.addEventListener("click", function() {
  windowClose(browserDiv);
});

function openURL() {
  var url = intUrl.value.trim();
  if (url === "") {
    alert("Man, paste a URL !!!!");
    return;
  }
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  window.location.href = url;
}

console.log(Go);
console.log(intUrl);

Go.addEventListener("click", openURL);
intUrl.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    openURL();
  }
});



