import ScrollSuave from "./module/scroll.js";
import Accordion from "./module/accordion.js";
import initAnimacaoScroll from "./module/scroll-animacao.js";

import TabNav from "./module/tabnav.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import initDropdownMenu from "./module/dropdown-menu.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFecthBitcoin from "./module/fecth-bitcoin.js";
import fetchAnimais from "./module/fetch-animais.js";

const scrollSuave = new ScrollSuave(`[data-menu="suave"] a[href^="#]`);
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  `[data-modal="abrir"]`,
  `[data-modal="fechar"]`,
  `[data-modal="container"]`
);
modal.init();

const toolTip = new Tooltip(`[data-tooltip]`);
toolTip.init();

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFecthBitcoin();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
