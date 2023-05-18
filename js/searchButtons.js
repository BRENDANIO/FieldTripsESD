var input = document.getElementById("search-input");
var list = document.getElementById("list");

input.addEventListener("keyup", function(event) {
  var query = event.target.value.toLowerCase();
  var items = list.getElementsByTagName("li");
  Array.from(items).forEach(function(item) {
    var button = item.getElementsByTagName("a")[0];
    var text = button.textContent.toLowerCase();
    if (text.indexOf(query) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});