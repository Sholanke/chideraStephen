const app = {
  DOM: {
    getElement: (_selector) => document.querySelector(_selector),
    getAllElements: (_selectors) => document.querySelectorAll(_selectors),
  },
  scrollToTop() {
    window.scrollTo(0, 0);
  },
};

export default app;
