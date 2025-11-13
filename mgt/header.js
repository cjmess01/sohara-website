fetch("/mgt/resources/templates/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").outerHTML = data;
  });
