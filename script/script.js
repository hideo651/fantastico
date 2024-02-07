import ScrollSuave from "./module/scroll.js";
import Accordion from "./module/accordion.js";
import TabNav from "./module/tabnav.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import ScrollAnima from "./module/scroll-animacao.js";
import DropdownMenu from "./module/dropdown-menu.js";
import MenuMobile from "./module/menu-mobile.js";
import Funcionamento from "./module/funcionamento.js";
import initFecthBitcoin from "./module/fecth-bitcoin.js";
import fetchAnimais from "./module/fetch-animais.js";
import SlideNav from "./module/slide.js";

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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();

slide.addControl(`.custom-controls`);

console.log(slide);

fetchAnimais("../../animaisapi.json", ".numeros-grid");
initFecthBitcoin(`https://blockchain.info/ticker`, ".btc-preco");
