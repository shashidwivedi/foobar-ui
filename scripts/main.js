// Scroll to Top
const btnScrollTop = document.querySelector(".btn.scroll-top");

window.addEventListener('scroll', () => {
  btnScrollTop.style.display = window.scrollY > 20 ? 'block' : 'none';
});

btnScrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
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
        });
      }
    });

    ratingStarEl.addEventListener("mouseleave", (event) => {
      event.target.closest(".rating").querySelectorAll(".rating-star").forEach(el => {
        el.style = "";
      });
    });

    ratingStarEl.addEventListener("click", (event) => {
      const target = event.target.closest(".rating-star");
      if (target) {
        const stars = target.dataset.number;
        target.closest(".rating").querySelectorAll(".rating-star").forEach(el => {
          if (el.dataset.number <= stars) {
            el.classList.add("icon-filled");
          } else {
            el.classList.remove("icon-filled");
          }
        });
      }
    });
  }
});

// Show Toast component
let timeOut;

document.querySelector(".show-toast-btn").addEventListener("click", (event) => {
  const toastEl = event.target.closest(".demo").querySelector(".toast");
  toastEl.classList.add("toast--open");
  const closeToastCb = () => {
    if (toastEl.classList.contains("toast--open")) {
      toastEl.classList.remove("toast--open");
    }
  };
  timeOut = setTimeout(closeToastCb, 5000);
});

document.querySelector(".toast .btn-close").addEventListener("click", (event) => {
  event.target.closest(".demo").querySelector(".toast").classList.remove("toast--open");
  clearTimeout(timeOut);
});
