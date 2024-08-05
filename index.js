//--- Scroll Up Button Object

const btnUp = {
  element: document.querySelector(".js-btn-up"),
  MINSCROLL: 500,

  show() {
    this.element.hidden = false;
  },
  
  hide() {
    this.element.hidden = true;
  },
  
  addEventListener() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > this.MINSCROLL ? this.show() : this.hide();
    });
    document.querySelector(".js-btn-up").onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

// activation
btnUp.addEventListener();
