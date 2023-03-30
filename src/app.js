import Popovers from "./components/popovers/Popovers";

const formConteiner = document.querySelector(".form-conteiner");

const popover = new Popovers(
  formConteiner,
  "Кнопочка",
  "Всплывашка для кнопочки",
  "Очено много текта для кнопочки"
);
popover.drawUi();

formConteiner.addEventListener("submit", (e) => {
  e.preventDefault();
});
