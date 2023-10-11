//animation
let typed = new Typed(".typing", {
  strings: [
    "Developer",
    "Video Editor",
    "Traveler",
    "Artist",
    "Dancer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

//name change
myname.addEventListener(
  "mouseenter",
  () => (myname.innerText = " Laurissa Lam")
);
myname.addEventListener(
  "mouseleave",
  () => (myname.innerText = "Laurissa Lam")
);

function darkFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
