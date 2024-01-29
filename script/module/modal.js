function initModal() {
  const botaoAbrit = document.querySelector(`[data-modal="abrir"]`);
  const botaoFechar = document.querySelector(`[data-modal="fechar"]`);
  const containerModal = document.querySelector(`[data-modal="container"]`);

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }
  function cliqueForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (botaoAbrit && botaoFechar && containerModal) {
    botaoAbrit.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

export default initModal;
