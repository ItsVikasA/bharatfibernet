export const nextUtility = {
  stickyNav() {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const header = document.getElementById("header-sticky");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 250) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
  },

  scrollAnimation() {
    if (typeof window === "undefined") return;

    const WOW = require("wowjs");
    new WOW.WOW().init();
  },
};
