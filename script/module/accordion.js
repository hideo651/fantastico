const initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle(activeClass);
        e.currentTarget.nextElementSibling.classList.toggle(activeClass);
      });
    });
  }
};

export default initAccordion;
