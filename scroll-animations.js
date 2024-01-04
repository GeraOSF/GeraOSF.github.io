const isReduced =
  window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

const hiddenElements = document.querySelectorAll(".hidden");

if (isReduced) {
  hiddenElements.forEach(element => element.classList.remove("hidden"));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("hidden");
      }
    });
  });

  hiddenElements.forEach(element => observer.observe(element));
}
