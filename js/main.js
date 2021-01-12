// Preloader
(function () {
  var loaderText = document.getElementById("loading-msg");
  var refreshIntervalId = setInterval(function () {
    loaderText.innerHTML = getLoadingText();
  }, 2500);

  function getLoadingText() {
    var strLoadingText;
    var arrLoadingText = ["Loading", "Please Wait", "Wait some more"];
    var rand = Math.floor(Math.random() * arrLoadingText.length);
    return arrLoadingText[rand];
  }
})();

document.querySelector(".preloader").classList.add("hide");
document.querySelector("body").classList.add("scroll");

// Gallery
var colc = new Colcade(".grid", {
  columns: ".grid-col",
  items: ".grid-item",
});
