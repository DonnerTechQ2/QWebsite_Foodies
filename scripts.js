$(window).load(function() {
  setTimeout(() => { document.getElementById("loader_subsubtitle").style.opacity = "0"; }, 100);
  reset_animation();
  setTimeout(() => { document.getElementById("loader").style.opacity = "0"; }, 300);
  setTimeout(() => { document.getElementById("loader").style.display = "none"; }, 1400);

});

function openNav() {
  document.getElementById("sidenav").style.transform = "translateX(0vw)";
}

function closeNav() {
  document.getElementById("sidenav").style.transform = "translateX(100vw)";
}

function reset_animation() {
  var el = document.getElementsByClassName('startingAnimation');
  for (var i = 0, max = "6"; i < max; i++) {
    el[i].style.animation = 'none';
    el[i].offsetHeight; /* trigger reflow */
    el[i].style.animation = null;
  }
}
