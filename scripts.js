$(window).load(function() {
  setTimeout(() => { document.getElementById("loader_subsubtitle").style.opacity = "0"; }, 100);

  setTimeout(() => { document.getElementById("loader").style.opacity = "0"; }, 300);
  setTimeout(() => { document.getElementById("loader").style.display = "none"; }, 1400);

});

function openNav() {
  document.getElementById("sidenav").style.transform = "translateX(0vw)";
}

function closeNav() {
  document.getElementById("sidenav").style.transform = "translateX(100vw)";
}
