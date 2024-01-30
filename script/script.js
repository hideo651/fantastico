import ScrollSuave from "./module/scroll.js";
import Accordion from "./module/accordion.js";
import initAnimacaoScroll from "./module/scroll-animacao.js";

import TabNav from "./module/tabnav.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initAnimaNumeros from "./module/anima-numeros.js";
import initFuncionamento from "./module/funcionamento.js";
import initFecthBitcoin from "./module/fecth-bitcoin.js";

const scrollSuave = new ScrollSuave(`[data-menu="suave"] a[href^="#]`);
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

initAnimacaoScroll();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();
initFecthBitcoin();
