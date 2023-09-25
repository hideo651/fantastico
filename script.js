const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("ativo");

const initTabNav = () => {
  if (tabMenu.length && tabContent.length) {
    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    };

    tabMenu.forEach((event, index) => {
      event.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
};
initTabNav();

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
initAccordion();

const IntoScrollSuave = () => {
  const linkInternos = document.querySelectorAll(`.js-menu a[href^="#"]`);

  linkInternos.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      console.log(e);

      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};
IntoScrollSuave();

const initAnimacaoScroll = () => {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade;

        if (isSectionVisible < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
};

initAnimacaoScroll();
