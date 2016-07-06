var aTags = document.getElementsByTagName("button");
var searchText = "Home";
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
      aTags[i].id = "active";
  } else {
      aTags[i].id = "inactive";
  }
}
