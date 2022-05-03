// Scroll to Top
const btnScrollTop = document.querySelector(".btn.scroll-top")

window.addEventListener('scroll', () => {
  btnScrollTop.style.display = window.scrollY > 20 ? 'block' : 'none';
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0)
});

// Ratings component
const ratingStarEls = document.querySelectorAll(".rating-star");

ratingStarEls.forEach(ratingStarEl => {
  if (!ratingStarEl.closest(".rating").classList.contains("disabled")) {
    ratingStarEl.addEventListener("mouseenter", (event) => {
      const target = event.target.closest(".rating-star");
      if (target) {
        const stars = target.dataset.number;
        target.closest(".rating").querySelectorAll(".rating-star").forEach(el => {
          if (el.dataset.number <= stars) {
            el.style.color = "var(--color-secondary)";
          }
        })
      }
    });

    ratingStarEl.addEventListener("mouseleave", (event) => {
      event.target.closest(".rating").querySelectorAll(".rating-star").forEach(el => {
        el.style = "";
      })
    });

    ratingStarEl.addEventListener("click", function(event) {
      const target = event.target.closest(".rating-star");
      if (target) {
        const stars = target.dataset.number;
        target.closest(".rating").querySelectorAll(".rating-star").forEach(el => {
          if (el.dataset.number <= stars) {
            el.classList.add("icon-filled");
          } else {
            el.classList.remove("icon-filled");
          }
        })
      }
    })
  }
});
