const initTabNav = () => {
  const tabMenu = document.querySelectorAll(`[data-tab="menu"] li`);
  const tabContent = document.querySelectorAll(`[data-tab="content"] section`);
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      const animacao = tabContent[index].dataset.anime;

      tabContent[index].classList.add("ativo", animacao);
    };

    tabMenu.forEach((event, index) => {
      event.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
};

export default initTabNav;
