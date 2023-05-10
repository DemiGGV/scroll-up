//--- Scroll Up Button Object
const btnUp = {
  element: document.querySelector('.btn-up'),
  show() {this.element.hidden = false},
  hide() {this.element.hidden = true},
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 500 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};
