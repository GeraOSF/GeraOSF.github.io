const arrowBtn = document.querySelector(".arrow-to-top");
arrowBtn.onclick = topFunction;

window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    arrowBtn.style.display = "block";
  } else {
    arrowBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Rest of the browsers
}