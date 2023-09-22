const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("ativo");

if (tabMenu.length && tabContent.length) {
  const activeTab = (index) => {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    tabContent[index].classList.add("ativo");
  };

  console.log(tabMenu);

  tabMenu.forEach((event, index) => {
    event.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
